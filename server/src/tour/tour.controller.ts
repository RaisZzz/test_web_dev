import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { IdDto } from '../dto/id.dto';
import { TourService } from './tour.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { Tour } from './tour.model';

@Controller('tour')
export class TourController {
  constructor(private tourService: TourService) {}

  @Post('/create')
  create(@Body() dto: CreateTourDto): Promise<Tour> {
    return this.tourService.createTour(dto);
  }

  @Get('/get')
  get(@Query() dto: IdDto): Promise<Tour> {
    return this.tourService.getTourById(dto.id);
  }

  @Get('/get_all')
  get_all(): Promise<Tour[]> {
    return this.tourService.getTours();
  }

  @Delete('/delete')
  delete(@Body() dto: IdDto): Promise<Tour> {
    return this.tourService.deleteTour(dto);
  }
}
