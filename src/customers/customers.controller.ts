import {Controller, Get, Param, ParseIntPipe} from '@nestjs/common';
import {CustomersService} from "./customers.service";

@Controller('customers')
export class CustomersController {

    @Get()
    getAllCustomers(){
        try{
            return this.customersService.getAllCustomers()
        }
        catch (error) {
            throw error
        }
    }

    constructor(private customersService: CustomersService) {}

    @Get(':customerId')
    getCustomer(@Param('customerId', ParseIntPipe) customerId: number){
        try {
            return this.customersService.getCustomer(customerId)
        }
        catch (error){
            throw error;
        }
    }

    @Get(':customerId/orders')
    getCustomerOrders(@Param('customerId', ParseIntPipe) customerId: number){
        try {
            return this.customersService.getCustomerOrders(customerId)
        }
        catch (error) {
            throw error
        }
    }

}