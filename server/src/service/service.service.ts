import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IdDto } from 'src/dto/id.dto';
import { Errors } from 'src/error/errors';
import { Error } from 'src/error/error';
import { Service } from './service.model';
import { CreateServiceDto } from './dto/create-service.dto';

@Injectable()
export class ServiceService {
    constructor(@InjectModel(Service) private serviceRepository: typeof Service) {}

    async createService(dto: CreateServiceDto): Promise<Service> {
        const service = await this.serviceRepository.create(dto);
        return service;
    }

    async getServices(): Promise<Service[]> {
        const services = await this.serviceRepository.findAll();
        return services;
    }

    async deleteService(dto: IdDto): Promise<Service> {
        const service: Service = await this.getServiceById(dto.id);
        await service.destroy();
        return service;
    }

    async getServiceById(id: number): Promise<Service> {
        const service = await this.serviceRepository.findOne({where: {id_service: id}});
        
        if (!service) {
            new Error().sendError(Errors.NotFound);
        }
        
        return service;
    }
}
