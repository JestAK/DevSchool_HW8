import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class OrdersService {

    constructor(private prisma: PrismaService) {}

    async deleteOrder(id: number){
        try {
            return await this.prisma.deleteOrder(id)
        }
        catch (error){
            return {
                message: error.message,
                code: error.code,
            }
        }
    }
}
