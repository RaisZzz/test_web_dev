import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IdDto } from 'src/dto/id.dto';
import { Errors } from 'src/error/errors';
import { Error } from 'src/error/error';
import { Resort } from './resort.model';
import { CreateResortDto } from './dto/create-resort.dto';

@Injectable()
export class ResortService {
    constructor(@InjectModel(Resort) private resortRepository: typeof Resort) {}

    async createResort(dto: CreateResortDto): Promise<Resort> {
        const resort = await this.resortRepository.create(dto);
        return resort;
    }

    async getResorts(): Promise<Resort[]> {
        const resorts = await this.resortRepository.findAll();
        return resorts;
    }

    async deleteResort(dto: IdDto): Promise<Resort> {
        const resort: Resort = await this.getResortById(dto.id);
        await resort.destroy();
        return resort;
    }

    async getResortById(id: number): Promise<Resort> {
        const resort = await this.resortRepository.findOne({where: {id_resort: id}});
        
        if (!resort) {
            new Error().sendError(Errors.NotFound);
        }
        
        return resort;
    }
}
