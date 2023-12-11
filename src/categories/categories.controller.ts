import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('/categories/:id/products/:productId')
  getCategoru(@Param() { id, productId }) {
    return 'product ' + productId + ' and category ' + id;
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'create',
      payload,
    };
  }
}
