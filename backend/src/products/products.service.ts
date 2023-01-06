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

  private getNewProductId(): number {
    const productsArray = Object.values(this.products);
    if (productsArray.length === 0) return 1;

    const newId = productsArray[productsArray.length - 1].id + 1;

    return newId;
  }

  create(newProduct: Product) {
    const newProductId = this.getNewProductId();
    this.products[newProductId] = { ...newProduct, id: newProductId };
  }

  find(id: number): Product {
    const product: Product = this.products[id];
    if (!product) throw new Error(`Product ${id} not found`);
    return product;
  }

  update(product: Product) {
    const foundProduct = this.products[product.id];
    if (!foundProduct) throw new Error(`No product found`);
    this.products[product.id] = product;
  }

  delete(id: number) {
    const product: Product = this.products[id];
    if (!product) throw new Error(`No product found`);
    delete this.products[id];
  }
}
