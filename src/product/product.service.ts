import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ProductEntity} from "./product.entity";
import {Repository} from "typeorm";
import {CreateProductDto} from "./dto/create-product.dto";
import {UpdateProductDto} from "./dto/update-product.dto";

@Injectable()
export class ProductService {
    constructor(@InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>) {
    }

    async createProduct(dto: CreateProductDto): Promise<ProductEntity> {
        return await this.productRepository.save({ ...dto });
    }

    async getOneProduct(id: number): Promise<ProductEntity> {
        return await this.productRepository.findOne({ where: { id } });
    }

    async getAllProducts():Promise<ProductEntity[]>{
        return await this.productRepository.find()
    }

    async removeProduct(id:number):Promise<number>{
        await  this.productRepository.delete({ id })
        return id;
    }

    async updateProduct(dto:UpdateProductDto):Promise<ProductEntity>{
        await  this.productRepository.update({id:dto.id},{...dto})
        return await this.getOneProduct(dto.id);
    }


}

