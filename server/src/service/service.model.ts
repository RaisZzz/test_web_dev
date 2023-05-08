import {
    Column,
    DataType,
    Model,
    Table,
  } from 'sequelize-typescript';
import { CreateServiceDto } from './dto/create-service.dto';
  
  @Table({
    tableName: 'service',
    createdAt: false,
    updatedAt: false,
    paranoid: true,
  })
  export class Service extends Model<Service, CreateServiceDto> {
    @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    })
    id_service: number;

    @Column({ type: DataType.STRING(45), allowNull: false })
    name_of_the_service: string;
  }