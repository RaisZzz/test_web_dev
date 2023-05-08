import {
    Column,
    DataType,
    Model,
    Table,
} from 'sequelize-typescript';
import { CreateCountryDto } from './dto/create-country.dto';
  
@Table({
    tableName: 'country',
    createdAt: false,
    updatedAt: false,
    paranoid: true,
})
export class Country extends Model<Country, CreateCountryDto> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id_country: number;

    @Column({ type: DataType.STRING(25), allowNull: false })
    country_name: string;

    @Column({ type: DataType.STRING(30), allowNull: false })
    presence_of_the_Russia_embassy: string;
}