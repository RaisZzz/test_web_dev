import { Module } from '@nestjs/common';
import { TourExcursionController } from './tour-excursion.controller';
import { TourExcursionService } from './tour-excursion.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TourExcursion } from './tour-excursion.model';

@Module({
  controllers: [TourExcursionController],
  providers: [TourExcursionService],
  imports: [SequelizeModule.forFeature([TourExcursion])],
  exports: [TourExcursionModule],
})
export class TourExcursionModule {}
