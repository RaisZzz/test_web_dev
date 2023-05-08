import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { Client } from './client/client.model';
import { ScheduleModule } from '@nestjs/schedule';
import { OrderModule } from './order/order.module';
import { TourController } from './tour/tour.controller';
import { TourModule } from './tour/tour.module';
import { CountryModule } from './country/country.module';
import { ResortController } from './resort/resort.controller';
import { ResortModule } from './resort/resort.module';
import { ServiceService } from './service/service.service';
import { ServiceController } from './service/service.controller';
import { ServiceModule } from './service/service.module';
import { ServiceTourModule } from './service-tour/service-tour.module';
import { ExcursionModule } from './excursion/excursion.module';
import { TourExcursionService } from './tour-excursion/tour-excursion.service';
import { TourExcursionModule } from './tour-excursion/tour-excursion.module';
import { Country } from './country/country.model';
import { Excursion } from './excursion/excursion.model';
import { Order } from './order/order.model';
import { Resort } from './resort/resort.model';
import { Service } from './service/service.model';
import { ServiceTour } from './service-tour/service-tour.model';
import { Tour } from './tour/tour.model';
import { TourExcursion } from './tour-excursion/tour-excursion.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: String(process.env.POSTGRES_USER),
      password: String(process.env.POSTGRES_PASSWORD),
      database: String(process.env.POSTGRES_DB),
      logging: true,
      models: [
        Client,
        Country,
        Excursion,
        Order,
        Resort,
        Service,
        ServiceTour,
        Tour,
        TourExcursion,
      ],
      autoLoadModels: true,
    }),
    SequelizeModule.forFeature(),
    ScheduleModule.forRoot(),
    ClientModule,
    OrderModule,
    TourModule,
    CountryModule,
    ResortModule,
    ServiceModule,
    ServiceTourModule,
    ExcursionModule,
    TourExcursionModule,
  ],
})
export class AppModule {}
