import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ProductService} from "./product.service";
import {CreateProductDto} from "./dto/create-product.dto";
import {ProductEntity} from "./product.entity";
import {UpdateProductDto} from "./dto/update-product.dto";

@Controller('product')
export class ProductController {
    constructor(readonly productService:ProductService) {
    }

    @Post()
    createProduct(@Body()dto:CreateProductDto):Promise<ProductEntity>{
        return this.productService.createProduct(dto);
    }

    @Get()
    getAllProduct():Promise<ProductEntity[]>{
        return this.productService.getAllProducts();
    }

    @Get(':id')
    getOneProduct(@Param('id')id:number)
    {
        return this.productService.getOneProduct(id);
    }

    @Put()
    updateProduct(@Body()dto:UpdateProductDto):Promise<ProductEntity>{
        return this.productService.updateProduct(dto);
    }

    @Delete(':id')
    delete(@Param('id')id:number){
        return this.productService.removeProduct(id);
    }

}
