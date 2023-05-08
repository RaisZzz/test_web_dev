import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IdDto } from 'src/dto/id.dto';
import { Errors } from 'src/error/errors';
import { Error } from 'src/error/error';
import { Excursion } from './excursion.model';
import { CreateExcursionDto } from './dto/create-excursion.dto';

@Injectable()
export class ExcursionService {
    constructor(@InjectModel(Excursion) private excursionRepository: typeof Excursion) {}

    async createExcursion(dto: CreateExcursionDto): Promise<Excursion> {
        const excursion = await this.excursionRepository.create(dto);
        return excursion;
    }

    async getExcursions(): Promise<Excursion[]> {
        const excursions = await this.excursionRepository.findAll();
        return excursions;
    }

    async deleteExcursion(dto: IdDto): Promise<Excursion> {
        const excursion: Excursion = await this.getExcursionById(dto.id);
        await excursion.destroy();
        return excursion;
    }

    async getExcursionById(id: number): Promise<Excursion> {
        const excursion = await this.excursionRepository.findOne({where: {id_excursion: id}});
        
        if (!excursion) {
            new Error().sendError(Errors.NotFound);
        }
        
        return excursion;
    }
}
