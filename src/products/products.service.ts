import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Monan as Product } from '../../output/entities/Monan';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  async create(createProductDto: CreateProductDto) {

    // create new product
    const newProduct = this.productRepository.create();
    newProduct.maMonAn = createProductDto.maMonAn;
    newProduct.tenMonAn = createProductDto.tenMonAn;
    newProduct.chiTiet = createProductDto.chiTiet;
    newProduct.hinhAnhMonAn = createProductDto.hinhAnhMonAn;
    newProduct.soLuong = createProductDto.soLuong;
    newProduct.monAnKem = createProductDto.monAnKem;
    newProduct.giaTien = createProductDto.giaTien;
    newProduct.giaGoc = createProductDto.giaGoc;
    newProduct.giamGia = createProductDto.giamGia;
    newProduct.yeuThich = createProductDto.yeuThich;
    newProduct.maDanhMuc = createProductDto.maDanhMuc;

    await this.productRepository.save(newProduct);
  }

  async getAll() {
    return this.productRepository.find();
  }

  // findAll() {
  //   return `This action returns all products`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} product`;
  // }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} product`;
  // }
}
