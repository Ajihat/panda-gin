import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { Product } from '../product';
import { Products } from '../products';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  async index(): Promise<Products> {
    return this.cartService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: number): Promise<Product> {
    return this.cartService.find(id);
  }

  @Post()
  create(@Body() product: Product) {
    this.cartService.create(product);
  }

  @Put()
  update(@Body() product: Product) {
    this.cartService.update(product);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.cartService.delete(id);
  }
}
