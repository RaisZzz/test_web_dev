import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IdDto } from 'src/dto/id.dto';
import { Errors } from 'src/error/errors';
import { Error } from 'src/error/error';
import { ServiceTour } from './service-tour.model';
import { CreateServiceTourDto } from './dto/create-service-tour.dto';

@Injectable()
export class ServiceTourService {
    constructor(@InjectModel(ServiceTour) private serviceTourRepository: typeof ServiceTour) {}

    async createServiceTour(dto: CreateServiceTourDto): Promise<ServiceTour> {
        const serviceTour = await this.serviceTourRepository.create(dto);
        return serviceTour;
    }

    async getServiceTours(): Promise<ServiceTour[]> {
        const serviceTours = await this.serviceTourRepository.findAll();
        return serviceTours;
    }

    async deleteServiceTour(dto: IdDto): Promise<ServiceTour> {
        const serviceTour: ServiceTour = await this.getServiceTourById(dto.id);
        await serviceTour.destroy();
        return serviceTour;
    }

    async getServiceTourById(id: number): Promise<ServiceTour> {
        const serviceTour = await this.serviceTourRepository.findOne({where: {id}});
        
        if (!serviceTour) {
            new Error().sendError(Errors.NotFound);
        }
        
        return serviceTour;
    }
}
