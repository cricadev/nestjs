import { Injectable } from '@nestjs/common';
import { Category } from 'src/entities/category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dto/categories.dto';
@Injectable()
export class CategoriesService {
  private categories: Category[] = [
    {
      id: 1,
      name: 'Category 1',
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    return this.categories.find((item) => item.id === id);
  }

  create(payload: any) {
    const newCategory = {
      id: this.categories.length + 1,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: number, payload: any) {
    const categoryIndex = this.categories.findIndex((item) => item.id === id);
    this.categories[categoryIndex] = {
      ...this.categories[categoryIndex],
      ...payload,
    };
    return this.categories[categoryIndex];
  }

  remove(id: number) {
    const categoryIndex = this.categories.findIndex((item) => item.id === id);
    this.categories.splice(categoryIndex, 1);
    return true;
  }
}
