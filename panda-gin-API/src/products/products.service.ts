import { Injectable } from '@nestjs/common';
import { Product } from '../product';
import { Products } from '../products';
import { productsDB } from './productsDB';

@Injectable()
export class ProductsService {
  private readonly products: Products = productsDB;

  findAll(): Products {
    return this.products;
  }

  create(newProduct: Product) {
    const id = Date.now();
    this.products[id] = { ...newProduct, id };
  }

  find(id: number): Product {
    const product: Product = this.products[id];
    if (!product) throw new Error(`Product ${id} not found`);
    return product;
  }

  update(product: Product) {
    if (!this.products[product.id]) throw new Error(`No product found`);
    this.products[product.id] = product;
  }

  delete(id: number) {
    const product: Product = this.products[id];
    if (!product) throw new Error(`No product found`);
    delete this.products[id];
  }
}
