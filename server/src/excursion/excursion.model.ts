import {
    Column,
    DataType,
    Model,
    Table,
  } from 'sequelize-typescript';
import { CreateExcursionDto } from './dto/create-excursion.dto';
  
  @Table({
    tableName: 'excursion',
    createdAt: false,
    updatedAt: false,
    paranoid: true,
  })
  export class Excursion extends Model<Excursion, CreateExcursionDto> {
    @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    })
    id_excursion: number;

    @Column({ type: DataType.STRING(50), allowNull: false })
    name_excursion: string;
  }