import { Module } from '@nestjs/common';
import {CustomersModule} from "./customers/customers.module";
import { PrismaModule } from './prisma/prisma.module';
import {ConfigModule} from "@nestjs/config";
import {EmployeesModule} from "./employees/employees.module";
import {OrdersModule} from "./orders/orders.module";
import {ProductsModule} from "./products/products.module";

@Module({
  imports: [CustomersModule, EmployeesModule, OrdersModule, ProductsModule, PrismaModule, ConfigModule.forRoot()],
})
export class AppModule {}
