import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { IdDto } from '../dto/id.dto';
import { ServiceTourService } from './service-tour.service';
import { CreateServiceTourDto } from './dto/create-service-tour.dto';
import { ServiceTour } from './service-tour.model';

@Controller('service-tour')
export class ServiceTourController {
  constructor(private serviceTourService: ServiceTourService) {}

  @Post('/create')
  create(@Body() dto: CreateServiceTourDto): Promise<ServiceTour> {
    return this.serviceTourService.createServiceTour(dto);
  }

  @Get('/get')
  get(@Query() dto: IdDto): Promise<ServiceTour> {
    return this.serviceTourService.getServiceTourById(dto.id);
  }

  @Get('/get_all')
  get_all(): Promise<ServiceTour[]> {
    return this.serviceTourService.getServiceTours();
  }

  @Delete('/delete')
  delete(@Body() dto: IdDto): Promise<ServiceTour> {
    return this.serviceTourService.deleteServiceTour(dto);
  }
}
