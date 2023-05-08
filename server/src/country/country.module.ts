import { Module } from '@nestjs/common';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Country } from './country.model';

@Module({
  controllers: [CountryController],
  providers: [CountryService],
  imports: [SequelizeModule.forFeature([Country])],
  exports: [CountryService]
})
export class CountryModule {}
