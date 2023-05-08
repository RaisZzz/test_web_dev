import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
  } from 'sequelize-typescript';
import { Service } from 'src/service/service.model';
import { Tour } from 'src/tour/tour.model';
import { CreateServiceTourDto } from './dto/create-service-tour.dto';
  
  @Table({
    tableName: 'service_tour',
    createdAt: false,
    updatedAt: false,
    paranoid: true,
  })
  export class ServiceTour extends Model<ServiceTour, CreateServiceTourDto> {
    @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    })
    id: number;

    @BelongsTo(() => Service)
    service: Service;

    @ForeignKey(() => Service)
    idService_service: number;

    @BelongsTo(() => Tour)
    tour: Tour;

    @ForeignKey(() => Tour)
    idTour_tourr: number;
  }