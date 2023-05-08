import {
    Column,
    DataType,
    Model,
    Table,
  } from 'sequelize-typescript';
import { CreateResortDto } from './dto/create-resort.dto';
  
  @Table({
    tableName: 'resort',
    createdAt: false,
    updatedAt: false,
    paranoid: true,
  })
  export class Resort extends Model<Resort, CreateResortDto> {
    @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    })
    id_resort: number;

    @Column({ type: DataType.STRING(30), allowNull: false })
    name_of_the_resort: string;
  }