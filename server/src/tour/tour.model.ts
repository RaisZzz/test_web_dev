import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
  } from 'sequelize-typescript';
import { Country } from 'src/country/country.model';
import { Resort } from 'src/resort/resort.model';
import { CreateTourDto } from './dto/create-tour.dto';
  
  @Table({
    tableName: 'tour',
    createdAt: false,
    updatedAt: false,
    paranoid: true,
  })
  export class Tour extends Model<Tour, CreateTourDto> {
    @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    })
    id_tour: number;

    @BelongsTo(() => Country)
    country: Country;

    @ForeignKey(() => Country)
    id_country: number;

    @BelongsTo(() => Resort)
    resort: Resort;

    @ForeignKey(() => Resort)
    id_resort: number;

    @Column({ type: DataType.STRING(30), allowNull: false })
    visa_service: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    number_of_days: number;

    @Column({ type: DataType.DATE, allowNull: false })
    daparture: Date;

    @Column({ type: DataType.DATE, allowNull: false })
    date_arrival_date: Date;
  }