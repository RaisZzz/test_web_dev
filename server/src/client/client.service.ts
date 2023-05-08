import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Client } from './client.model';
import { IdDto } from '../dto/id.dto';
import { Error } from 'src/error/error';
import { Errors } from 'src/error/errors';

@Injectable()
export class ClientService {
  constructor(@InjectModel(Client) private clientRepository: typeof Client) {}

  async createClient(dto: CreateClientDto): Promise<Client> {
    const client = await this.clientRepository.create(dto);
    return client;
  }

  async getClients(): Promise<Client[]> {
    const clients = await this.clientRepository.findAll();
    return clients;
  }

  async deleteClient(dto: IdDto): Promise<Client> {
    const client: Client = await this.getClientById(dto.id);
    await client.destroy();
    return client;
  }

  async getClientById(id: number): Promise<Client> {
    const client = await this.clientRepository.findOne({where: {id_client: id}});
    
    if (!client) {
      new Error().sendError(Errors.NotFound);
    }
    
    return client;
  }
}
