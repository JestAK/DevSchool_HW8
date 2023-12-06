import {Controller, Get, Param, ParseIntPipe} from '@nestjs/common';
import {CustomersService} from "./customers.service";

@Controller('customers')
export class CustomersController {

    constructor(private customersService: CustomersService) {
    }
    @Get(':customerId')
    printer(@Param('customerId', ParseIntPipe) customerId: number){
        return `<h1>IDI NAHUI customer ${customerId}</h1>`
    }
}