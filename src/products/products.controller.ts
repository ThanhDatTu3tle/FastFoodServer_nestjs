import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { CreateCategoryDto } from 'src/category/dto/create-category.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiCreatedResponse({ type: Product })
  @ApiBadRequestResponse()
  async create(
    @Body() createProductDto: CreateProductDto,
    @Res() res: Response,
  ) {
    try {
      const newProduct = await this.productsService.create(
        createProductDto,
      );
      res.status(201).json({ success: true, body: newProduct });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Get()
  async getAll() {
    return this.productsService.getAll();
  }

  // @Get()
  // findAll() {
  //   return this.productsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.productsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productsService.update(+id, updateProductDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productsService.remove(+id);
  // }
}
