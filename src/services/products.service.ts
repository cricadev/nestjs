import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from 'src/dto/products.dto';
@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 122,
      image: '',
      stock: 12,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);

    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    console.log(payload);
    const newProduct = {
      id: this.products.length + 1,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (!product) {
      return null;
    }
    const productIndex = this.products.findIndex((item) => item.id === id);
    this.products[productIndex] = {
      ...this.products[productIndex],
      ...payload,
    };
    return this.products[productIndex];
  }
  remove(id: number) {
    const productIndex = this.products.findIndex((item) => item.id === id);
    if (productIndex === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(productIndex, 1);
    return true;
  }
}
