import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma/prisma.service";

@Injectable({})
export class CustomersService {
    constructor(private prisma: PrismaService) {}

    //Get customer by ID
    async getCustomer(id: number){

        try {
            return await this.prisma.getCustomer(id)
        }
        catch (error) {
            return {
                message: error.message,
                code: error.code,
            }
        }

    }

    //Get all customers
    async getAllCustomers(){
        return await this.prisma.getAllCustomers()
    }

    //Get raw data from PrismaService about customer's orders and process it to final template
    async getCustomerOrders(customerId){
        try {
            const orders = await this.prisma.getCustomerOrders(customerId)

            let processedOrders: object[] = [];
            let totalCostOfAllOrders: number = 0

            //Format raw data and write to temporary variables
            orders.forEach((order) =>{
                let costOfOrder  = 0;
                order.ProductsOnOrders.forEach((product) => {
                    costOfOrder += product.product.price * product.orderedAmount;
                });
                costOfOrder += order.deliveryCost;
                costOfOrder = Number(costOfOrder.toFixed(2));
                totalCostOfAllOrders += costOfOrder;

                //Push formated orders
                processedOrders.push({
                    id: order.id,
                    customerId: order.customersId,
                    employeeId: order.employeesId,
                    address: order.orderAddress,
                    deliveryCost: order.deliveryCost,
                    orderDate: order.orderDate,
                    totalCost: costOfOrder
                });
            });


            //Format whole response
            const orderAnswer = {
                orders: processedOrders,
                totalCost: Number(totalCostOfAllOrders.toFixed(2
                ))
            };

            return orderAnswer
        }
        catch (error) {
            return {
                message: error.message,
                code: error.code,
            }
        }
    }
}