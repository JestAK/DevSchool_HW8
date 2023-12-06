import {Controller, Delete, Param, ParseIntPipe} from '@nestjs/common';
import {OrdersService} from "./orders.service";

@Controller('orders')
export class OrdersController {

    constructor(private orderService: OrdersService) {}

    @Delete(':orderId')
    deleteOrder(@Param('orderId', ParseIntPipe) orderId: number){
        return this.orderService.deleteOrder(orderId)
    }
}
