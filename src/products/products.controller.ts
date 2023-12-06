import {Body, Controller, Post} from '@nestjs/common';
import {NewProductDto} from "./dto/new-product.dto";
import {ProductsService} from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private productService: ProductsService) {}

    @Post()
    postProduct(@Body() productDto: NewProductDto){
        return this.productService.postProduct(productDto)
    }
}
