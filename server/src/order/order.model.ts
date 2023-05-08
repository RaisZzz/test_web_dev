import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
  } from 'sequelize-typescript';
import { CreateOrderDto } from './dto/create-order.dto';
import { Tour } from 'src/tour/tour.model';
import { Client } from 'src/client/client.model';
  
  @Table({
    tableName: 'order',
    createdAt: false,
    updatedAt: false,
    paranoid: true,
  })
  export class Order extends Model<Order, CreateOrderDto> {
    @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    })
    id_order: number;

    @BelongsTo(() => Tour)
    tour: Tour;

    @ForeignKey(() => Tour)
    id_tour: number;

    @BelongsTo(() => Client)
    client: Client;

    @ForeignKey(() => Client)
    id_client: number;

    @Column({ type: DataType.STRING(25), allowNull: false })
    transport: string;

    @Column({ type: DataType.STRING(20) })
    type_of_food?: string;

    @Column({ type: DataType.STRING(20) })
    type_of_accommodation?: string;

    @Column({ type: DataType.INTEGER({decimals: 65, precision: 2}) })
    cost: number;
  }