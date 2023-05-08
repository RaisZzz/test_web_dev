import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IdDto } from 'src/dto/id.dto';
import { Errors } from 'src/error/errors';
import { Error } from 'src/error/error';
import { TourExcursion } from './tour-excursion.model';
import { CreateTourExcursionDto } from './dto/create-tour-excursion.dto';

@Injectable()
export class TourExcursionService {
    constructor(@InjectModel(TourExcursion) private tourExcursionRepository: typeof TourExcursion) {}

    async createTourExcursion(dto: CreateTourExcursionDto): Promise<TourExcursion> {
        const tourExcursion = await this.tourExcursionRepository.create(dto);
        return tourExcursion;
    }

    async getTourExcursions(): Promise<TourExcursion[]> {
        const tourExcursions = await this.tourExcursionRepository.findAll();
        return tourExcursions;
    }

    async deleteTourExcursion(dto: IdDto): Promise<TourExcursion> {
        const tourExcursion: TourExcursion = await this.getTourExcursionById(dto.id);
        await tourExcursion.destroy();
        return tourExcursion;
    }

    async getTourExcursionById(id: number): Promise<TourExcursion> {
        const tourExcursion = await this.tourExcursionRepository.findOne({where: {id}});
        
        if (!tourExcursion) {
            new Error().sendError(Errors.NotFound);
        }
        
        return tourExcursion;
    }
}
