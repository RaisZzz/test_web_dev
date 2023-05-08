import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IdDto } from 'src/dto/id.dto';
import { Errors } from 'src/error/errors';
import { Error } from 'src/error/error';
import { Order } from './order.model';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order) private orderRepository: typeof Order) {}

    async createOrder(dto: CreateOrderDto): Promise<Order> {
        const order = await this.orderRepository.create(dto);
        return order;
    }

    async getOrders(): Promise<Order[]> {
        const orders = await this.orderRepository.findAll();
        return orders;
    }

    async deleteOrder(dto: IdDto): Promise<Order> {
        const order: Order = await this.getOrderById(dto.id);
        await order.destroy();
        return order;
    }

    async getOrderById(id: number): Promise<Order> {
        const order = await this.orderRepository.findOne({where: {id_order: id}});
        
        if (!order) {
            new Error().sendError(Errors.NotFound);
        }
        
        return order;
    }
}
