import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { Country } from './country.model';
import { InjectModel } from '@nestjs/sequelize';
import { IdDto } from 'src/dto/id.dto';
import { Errors } from 'src/error/errors';
import { Error } from 'src/error/error';

@Injectable()
export class CountryService {
    constructor(@InjectModel(Country) private countryRepository: typeof Country) {}

    async createCountry(dto: CreateCountryDto): Promise<Country> {
        const country = await this.countryRepository.create(dto);
        return country;
    }

    async getCountries(): Promise<Country[]> {
        const countries = await this.countryRepository.findAll();
        return countries;
    }

    async deleteCountry(dto: IdDto): Promise<Country> {
        const country: Country = await this.getCountryById(dto.id);
        await country.destroy();
        return country;
    }

    async getCountryById(id: number): Promise<Country> {
        const country = await this.countryRepository.findOne({where: {id_country: id}});
        
        if (!country) {
            new Error().sendError(Errors.NotFound);
        }
        
        return country;
    }
}
