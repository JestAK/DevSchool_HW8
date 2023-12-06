import {IsCurrency, IsDecimal, IsEnum, IsInt, IsNotEmpty, IsNumber, IsString} from "class-validator";
import {ProductCategory} from "@prisma/client";

export class NewProductDto{
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsEnum(ProductCategory)
    category: ProductCategory

    @IsNotEmpty()
    @IsInt()
    amount: number

    @IsNotEmpty()
    @IsNumber()
    price: number
}