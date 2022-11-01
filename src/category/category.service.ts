import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
// import { UpdateCategoryDto } from './dto/update-category.dto';
import { Monan as Product } from '../../output/entities/Monan';
import { Danhmuc as Category } from '../../output/entities/Danhmuc';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {

    // create new categories
    const newCategory = this.categoryRepository.create();
    newCategory.maDanhMuc = createCategoryDto.maDanhMuc;
    newCategory.tenDanhMuc = createCategoryDto.tenDanhMuc;
    newCategory.hinhAnh = createCategoryDto.hinhAnh;

    await this.categoryRepository.save(newCategory);
  }

  async getAll() {
    return this.categoryRepository.find();
  }

  // findAll() {
  //   return `This action returns all categories`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} category`;
  // }

  // update(id: number, updateCategoryDto: UpdateCategoryDto) {
  //   return `This action updates a #${id} category`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} category`;
  // }
}
