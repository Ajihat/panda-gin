import { Injectable } from '@nestjs/common';
import { Product } from '../product';
import { Products } from '../products';

@Injectable()
export class CartService {
  private readonly cart: Products = {
    1: {
      id: 1,
      category: 'spirits',
      title: 'Limited Edition 2022',
      description: 'Only 6000 bottles',
      price: '46.00',
      outOfStock: true,
      discount: '',
      limitedEdition: true,
      images: [
        'https://raw.githubusercontent.com/Ajihat/panda-gin-images/main/1/1_1.jpg',
        'https://raw.githubusercontent.com/Ajihat/panda-gin-images/main/1/1_2.jpg',
        'https://raw.githubusercontent.com/Ajihat/panda-gin-images/main/1/1_3.jpg',
        'https://raw.githubusercontent.com/Ajihat/panda-gin-images/main/1/1_4.jpg',
      ],
      imageThumbnail:
        'https://raw.githubusercontent.com/Ajihat/panda-gin-images/main/1/1_thumbnail.jpg',
      text: "50cl / 45% / New recipe. Limited edition 'Color Series'",
      formats: [
        { id: 1, text: '50cl', promotion: false },
        { id: 2, text: '6 x 50cl', promotion: true },
      ],
    },
  };

  private getNewId(): number {
    const cartContentArray = Object.values(this.cart);

    if (cartContentArray.length === 0) return 1;

    const newId = cartContentArray[cartContentArray.length - 1].id + 1;

    return newId;
  }

  findAll(): Products {
    return this.cart;
  }

  create(newProduct: Product) {
    const newId = this.getNewId();

    this.cart[newId] = {
      ...newProduct,
      id: newId,
    };
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
