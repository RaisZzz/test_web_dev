import { Module } from '@nestjs/common';
import { ServiceTourService } from './service-tour.service';
import { ServiceTourController } from './service-tour.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServiceTour } from './service-tour.model';

@Module({
  providers: [ServiceTourService],
  controllers: [ServiceTourController],
  imports: [SequelizeModule.forFeature([ServiceTour])],
  exports: [ServiceTourModule],
})
export class ServiceTourModule {}
