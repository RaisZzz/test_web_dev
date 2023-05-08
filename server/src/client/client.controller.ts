import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { Client } from './client.model';
import { IdDto } from '../dto/id.dto';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Post('/create')
  create(@Body() dto: CreateClientDto): Promise<Client> {
    return this.clientService.createClient(dto);
  }

  @Get('/get')
  get(@Query() dto: IdDto): Promise<Client> {
    return this.clientService.getClientById(dto.id);
  }

  @Get('/get_all')
  get_all(): Promise<Client[]> {
    return this.clientService.getClients();
  }

  @Delete('/delete')
  delete(@Body() dto: IdDto): Promise<Client> {
    return this.clientService.deleteClient(dto);
  }
}
