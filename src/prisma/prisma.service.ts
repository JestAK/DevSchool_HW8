import {Injectable, OnModuleDestroy, OnModuleInit} from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { ProductCategory } from '@prisma/client';
import {ConfigService} from "@nestjs/config";
import {PatchEmployeeDto} from "../employees/dto";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

    //Connecting
    async onModuleInit() {
        await this.$connect()
    }

    //Path to my DB
    constructor(config: ConfigService) {
        super({
            datasources: {
                db: {
                    url: config.get('DATABASE_URL')
                }
            }
        });
    }

    //Functions to work with PrismaService

    //Get customer by id
    async getCustomer(id: number){
        const customer = await this.customers.findUnique({
            where: {
                id: id
            }
        })

        //Check if customer exists
        if (!customer){
            throw new Error(`Customer with id:${id} doesn't exists`)
        }

        return customer
    }

    //Get all customers
    async getAllCustomers(){
        return await this.customers.findMany()
    }

    //Get customer's orders
    async getCustomerOrders(customerId: number){
        try {
            //Check if customer exists
            await this.getCustomer(customerId)

            //Get data from DB
            const orders = await this.orders.findMany({
                where: {
                    customersId: customerId
                },
                include: {
                    ProductsOnOrders: {
                        include: {
                            product: true
                        }
                    }
                }
            })

            //Check if orders exists
            if (!orders){
                throw new Error(`Customer with id:${customerId} hasn't orders`)
            }

            return orders
        }
        catch (error){
            throw error
        }
    }

    //Get employee by ID
    async getEmployee(id: number){
        const employee = await this.employees.findUnique({
            where: {
                id: id
            }
        })

        //Check if employee exists
        if (!employee){
            throw new Error(`Employee with id:${id} doesn't exists`)
        }

        return employee
    }

    //Patch employee by ID
    async patchEmployee(id: number, employeeData: PatchEmployeeDto){
        try {
            //Check if employee exists
            await this.getEmployee(id)

            //Patch data on DB
            const employee = await this.employees.update({
                where: {
                    id: id
                },
                data: {
                    first_name: employeeData.firstName,
                    last_name: employeeData.lastName,
                    middle_name: employeeData.middleName,
                    position: employeeData.position
                }
            })

            return employee
        }
        catch (error) {
            throw error
        }
    }

    //Get orders by ID


    //Delete orders by ID


    //Post new product



    //Disconnecting
    async onModuleDestroy(){
        await this.$disconnect()
    }
}
