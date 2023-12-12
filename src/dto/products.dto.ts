import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;
  @IsNumber()
  @IsNotEmpty()
  readonly stock = 0;
  @IsUrl()
  @IsNotEmpty()
  readonly image = '';
}

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'name of the product' })
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'description of the product' })
  readonly description: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({ description: 'price of the product' })
  readonly price: number;
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'stock of the product' })
  readonly stock = 0;
  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({ description: 'image of the product' })
  readonly image = '';
}
