import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '../product';
import { Products } from '../products';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async index(): Promise<Products> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: number): Promise<Product> {
    return this.productsService.find(id);
  }

  @Post()
  create(@Body() product: Product) {
    this.productsService.create(product);
  }

  @Put()
  update(@Body() product: Product) {
    this.productsService.update(product);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.productsService.delete(id);
  }
}
