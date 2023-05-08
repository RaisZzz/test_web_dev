import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
  } from 'sequelize-typescript';
import { Excursion } from 'src/excursion/excursion.model';
import { Tour } from 'src/tour/tour.model';
import { CreateTourExcursionDto } from './dto/create-tour-excursion.dto';
  
  @Table({
    tableName: 'tour_excursion',
    createdAt: false,
    updatedAt: false,
    paranoid: true,
  })
  export class TourExcursion extends Model<TourExcursion, CreateTourExcursionDto> {
    @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    })
    id: number;

    @BelongsTo(() => Excursion)
    excursion: Excursion;

    @ForeignKey(() => Excursion)
    idExcursion_excursion: number;

    @BelongsTo(() => Tour)
    tour: Tour;

    @ForeignKey(() => Tour)
    idTour_tourr: number;
  }