import { Module } from '@nestjs/common';
import { TourService } from './tour.service';
import { TourController } from './tour.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tour } from './tour.model';

@Module({
  providers: [TourService],
  controllers: [TourController],
  imports: [SequelizeModule.forFeature([Tour])],
  exports: [TourModule],
})
export class TourModule {}
