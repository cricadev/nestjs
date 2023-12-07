import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/new-endpoint')
  newEndpoint() {
    return 'soy un nuevo endpoiaadfafdsant';
  }

  @Get('/products/')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }

  @Get('/products/filter')
  getProductFilter(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }

  @Get('/products/:productId')
  getProduct(@Param('productId') productId: string) {
    return 'product ' + productId;
  }

  @Get('/categories/:id/products/:productId')
  getCategoru(@Param() { id, productId }) {
    return 'product ' + productId + ' and category ' + id;
  }
}
