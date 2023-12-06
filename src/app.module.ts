import { Module } from '@nestjs/common';
import {CustomersModule} from "./customers/customers.module";
import { PrismaModule } from './prisma/prisma.module';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [CustomersModule, PrismaModule, ConfigModule.forRoot()],
})
export class AppModule {}
