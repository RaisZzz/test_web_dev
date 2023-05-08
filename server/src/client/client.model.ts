import {
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { CreateClientDto } from './dto/create-client.dto';

@Table({
  tableName: 'client',
  createdAt: false,
  updatedAt: false,
  paranoid: true,
})
export class Client extends Model<Client, CreateClientDto> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id_client: number;

  @Column({ type: DataType.STRING(50), allowNull: false })
  fcs: string;

  @Column({ type: DataType.STRING(50), allowNull: false })
  address: string;

  @Column({ type: DataType.DATE, allowNull: false })
  date_of_birth: Date;

  @Column({ type: DataType.INTEGER, allowNull: false })
  passport_series: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  passport_number: number;
}