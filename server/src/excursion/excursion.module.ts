import { Module } from '@nestjs/common';
import { ExcursionService } from './excursion.service';
import { ExcursionController } from './excursion.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Excursion } from './excursion.model';

@Module({
  controllers: [ExcursionController],
  providers: [ExcursionService],
  imports: [SequelizeModule.forFeature([Excursion])],
  exports: [ExcursionModule],
})
export class ExcursionModule {}
