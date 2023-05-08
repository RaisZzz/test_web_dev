import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { IdDto } from '../dto/id.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';
import { Order } from './order.model';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('/create')
  create(@Body() dto: CreateOrderDto): Promise<Order> {
    return this.orderService.createOrder(dto);
  }

  @Get('/get')
  get(@Query() dto: IdDto): Promise<Order> {
    return this.orderService.getOrderById(dto.id);
  }

  @Get('/get_all')
  get_all(): Promise<Order[]> {
    return this.orderService.getOrders();
  }

  @Delete('/delete')
  delete(@Body() dto: IdDto): Promise<Order> {
    return this.orderService.deleteOrder(dto);
  }
}
