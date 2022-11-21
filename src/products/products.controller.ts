import { Controller, Get, Post, Body, Put, Patch, Param, Delete, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';

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

  @Get(':maDanhMuc')
  async findCategory(@Param('maDanhMuc') maDanhMuc: string) {
    return this.productsService.findCategory(maDanhMuc);
  }

  @Patch(':maMonAn')
  async update(
    @Param('maMonAn') maMonAn: string, 
    @Body() updateProductDto: UpdateProductDto,
    @Res() res: Response,
  ) {
    if (!updateProductDto) {
      res
        .status(400)
        .json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const updateCategory = await this.productsService.update(
        maMonAn, 
        updateProductDto,
      );
      res.status(200).json({ success: true, body: updateCategory });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Delete(':maMonAn')
  async remove(@Param('maMonAn') maDanhMuc: string, @Res() res: Response,) {
    if (!maDanhMuc) {
      res.status(404).json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const deleteProduct = await this.productsService.remove(maDanhMuc);
      res.status(200).json({ success: true, body: deleteProduct });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }
}
