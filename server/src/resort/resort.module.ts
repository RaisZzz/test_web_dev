import { Module } from '@nestjs/common';
import { ResortService } from './resort.service';
import { ResortController } from './resort.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Resort } from './resort.model';

@Module({
  providers: [ResortService],
  controllers: [ResortController],
  imports: [SequelizeModule.forFeature([Resort])],
  exports: [ResortModule],
})
export class ResortModule {}
