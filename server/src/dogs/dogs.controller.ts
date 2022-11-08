import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, Req } from '@nestjs/common';
import { Dog } from './dog';

@Controller('dogs')
export class DogsController {
  dogs: Dog[] = [
    {
      id: 1,
      name: "Sharik",
      age: 1
    },
    {
      id: 2,
      name: "Tuzik",
      age: 2
    },
    {
      id: 5,
      name: "Bobik",
      age: 3
    },
  ]

  @Get()
  findAll(): Dog[] {
    return this.dogs;
  }

  @Get(':id')
  findById(@Param('id', new ParseIntPipe()) id,): Dog {
    const dog = this.dogs.find(item => item.id === id);
    if (dog) {
      return dog;
    }
    throw new NotFoundException();
  }


  @Post()
  Create(@Body() model: Dog): Dog {
    console.log(model);
    const dogExist = this.dogs.some(item => item.id === model.id);
    if (dogExist) {
      throw new BadRequestException(`dog with id=${model.id} already exist`);
    }
    this.dogs.push(model);
    return model;
  }

  @Delete(':id')
  deleteById(@Param('id', new ParseIntPipe()) id,): boolean {
    const len = this.dogs.length;
    this.dogs = this.dogs.filter(item => item.id !== id);
    if (len === this.dogs.length){
      throw new NotFoundException();
    }
    return true;
  }
 
  
  
  @Put()
  update(@Body() model: Dog): Dog {
    console.log(model);
    const dog = this.dogs.find(item => item.id === model.id);
    if (!dog) {
      throw new BadRequestException(`dog with id=${model.id} does not exist`);
    }
    dog.id = model.id;
    dog.name = model.name;
    dog.age = model.age;
    return dog;
  }
}