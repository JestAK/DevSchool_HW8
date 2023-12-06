import { Injectable } from '@nestjs/common';
import {NewProductDto} from "./dto/new-product.dto";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class ProductsService {

    constructor(private prisma: PrismaService) {}

    async postProduct(productData: NewProductDto){
        try {
            return await this.prisma.postProduct(productData)
        }
        catch (error){
            return {
                message: error.message,
                code: error.code,
            }
        }
    }
}
