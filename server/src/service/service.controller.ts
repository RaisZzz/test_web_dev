import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { IdDto } from '../dto/id.dto';
import { ServiceService } from './service.service';
import { Service } from './service.model';
import { CreateServiceDto } from './dto/create-service.dto';

@Controller('service')
export class ServiceController {
  constructor(private serviceService: ServiceService) {}

  @Post('/create')
  create(@Body() dto: CreateServiceDto): Promise<Service> {
    return this.serviceService.createService(dto);
  }

  @Get('/get')
  get(@Query() dto: IdDto): Promise<Service> {
    return this.serviceService.getServiceById(dto.id);
  }

  @Get('/get_all')
  get_all(): Promise<Service[]> {
    return this.serviceService.getServices();
  }

  @Delete('/delete')
  delete(@Body() dto: IdDto): Promise<Service> {
    return this.serviceService.deleteService(dto);
  }
}
