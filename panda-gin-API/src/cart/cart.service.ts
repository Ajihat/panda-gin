import { Injectable } from '@nestjs/common';
import { Product } from '../product';
import { Products } from '../products';

@Injectable()
export class CartService {
  private readonly cart: Products = {
    1: {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      amount: 100,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
  };

  findAll(): Products {
    return this.cart;
  }

  create(newProduct: Product) {
    const id = Date.now();
    this.cart[id] = { ...newProduct, id };
  }

  find(id: number): Product {
    const product: Product = this.cart[id];
    if (!product) throw new Error(`Product ${id} not found`);
    return product;
  }

  update(product: Product) {
    if (!this.cart[product.id]) throw new Error(`No product found`);
    this.cart[product.id] = product;
  }

  delete(id: number) {
    const product: Product = this.cart[id];
    if (!product) throw new Error(`No product found`);
    delete this.cart[id];
  }
}
