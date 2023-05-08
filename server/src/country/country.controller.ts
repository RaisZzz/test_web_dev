import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { IdDto } from '../dto/id.dto';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { Country } from './country.model';

@Controller('country')
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Post('/create')
  create(@Body() dto: CreateCountryDto): Promise<Country> {
    return this.countryService.createCountry(dto);
  }

  @Get('/get')
  get(@Query() dto: IdDto): Promise<Country> {
    return this.countryService.getCountryById(dto.id);
  }

  @Get('/get_all')
  get_all(): Promise<Country[]> {
    return this.countryService.getCountries();
  }

  @Delete('/delete')
  delete(@Body() dto: IdDto): Promise<Country> {
    return this.countryService.deleteCountry(dto);
  }
}
