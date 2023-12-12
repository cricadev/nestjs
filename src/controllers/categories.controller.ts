import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoriesService } from './../services/categories.service';
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  getCategories() {
    return this.categoriesService.findAll();
  }

  @Get('/:id/products/:productId')
  getCategory(@Param() { id, productId }) {
    return {
      message: `Category ${id} Product ${productId}`,
    };
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'create',
      payload,
    };
  }
}
