import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { IdDto } from '../dto/id.dto';
import { ExcursionService } from './excursion.service';
import { Excursion } from './excursion.model';
import { CreateExcursionDto } from './dto/create-excursion.dto';

@Controller('excursion')
export class ExcursionController {
  constructor(private excursionService: ExcursionService) {}

  @Post('/create')
  create(@Body() dto: CreateExcursionDto): Promise<Excursion> {
    return this.excursionService.createExcursion(dto);
  }

  @Get('/get')
  get(@Query() dto: IdDto): Promise<Excursion> {
    return this.excursionService.getExcursionById(dto.id);
  }

  @Get('/get_all')
  get_all(): Promise<Excursion[]> {
    return this.excursionService.getExcursions();
  }

  @Delete('/delete')
  delete(@Body() dto: IdDto): Promise<Excursion> {
    return this.excursionService.deleteExcursion(dto);
  }
}
