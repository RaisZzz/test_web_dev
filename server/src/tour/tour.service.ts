import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IdDto } from 'src/dto/id.dto';
import { Errors } from 'src/error/errors';
import { Error } from 'src/error/error';
import { Tour } from './tour.model';
import { CreateTourDto } from './dto/create-tour.dto';

@Injectable()
export class TourService {
    constructor(@InjectModel(Tour) private tourRepository: typeof Tour) {}

    async createTour(dto: CreateTourDto): Promise<Tour> {
        const tour = await this.tourRepository.create(dto);
        return tour;
    }

    async getTours(): Promise<Tour[]> {
        const tours = await this.tourRepository.findAll();
        return tours;
    }

    async deleteTour(dto: IdDto): Promise<Tour> {
        const tour: Tour = await this.getTourById(dto.id);
        await tour.destroy();
        return tour;
    }

    async getTourById(id: number): Promise<Tour> {
        const tour = await this.tourRepository.findOne({where: {id_tour: id}});
        
        if (!tour) {
            new Error().sendError(Errors.NotFound);
        }
        
        return tour;
    }
}
