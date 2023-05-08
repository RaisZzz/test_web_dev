import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Service } from './service.model';

@Module({
    providers: [ServiceService],
    controllers: [ServiceController],
    imports: [SequelizeModule.forFeature([Service])],
    exports: [SequelizeModule],
})
export class ServiceModule {}
