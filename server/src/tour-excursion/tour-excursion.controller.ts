import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { IdDto } from '../dto/id.dto';
import { TourExcursionService } from './tour-excursion.service';
import { CreateTourExcursionDto } from './dto/create-tour-excursion.dto';
import { TourExcursion } from './tour-excursion.model';

@Controller('tour-excursion')
export class TourExcursionController {
  constructor(private tourService: TourExcursionService) {}

  @Post('/create')
  create(@Body() dto: CreateTourExcursionDto): Promise<TourExcursion> {
    return this.tourService.createTourExcursion(dto);
  }

  @Get('/get')
  get(@Query() dto: IdDto): Promise<TourExcursion> {
    return this.tourService.getTourExcursionById(dto.id);
  }

  @Get('/get_all')
  get_all(): Promise<TourExcursion[]> {
    return this.tourService.getTourExcursions();
  }

  @Delete('/delete')
  delete(@Body() dto: IdDto): Promise<TourExcursion> {
    return this.tourService.deleteTourExcursion(dto);
  }
}
