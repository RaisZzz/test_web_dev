import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { IdDto } from '../dto/id.dto';
import { ResortService } from './resort.service';
import { Resort } from './resort.model';
import { CreateResortDto } from './dto/create-resort.dto';

@Controller('resort')
export class ResortController {
  constructor(private resortService: ResortService) {}

  @Post('/create')
  create(@Body() dto: CreateResortDto): Promise<Resort> {
    return this.resortService.createResort(dto);
  }

  @Get('/get')
  get(@Query() dto: IdDto): Promise<Resort> {
    return this.resortService.getResortById(dto.id);
  }

  @Get('/get_all')
  get_all(): Promise<Resort[]> {
    return this.resortService.getResorts();
  }

  @Delete('/delete')
  delete(@Body() dto: IdDto): Promise<Resort> {
    return this.resortService.deleteResort(dto);
  }
}
