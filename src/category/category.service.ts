import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Danhmuc as Category } from '../../output/entities/Danhmuc';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
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

  async findOne(maDanhMuc: string): Promise<Category> {
    const category =  this.categoryRepository.findOneBy({ maDanhMuc: maDanhMuc });

    return category;
  }

  async update(maDanhMuc: string, updateCategoryDto: UpdateCategoryDto) {
    try {
      const updateCategory = await this.categoryRepository.findOneByOrFail({ maDanhMuc });

      return await this.categoryRepository.save({
        ...updateCategory,
      });
    } catch (err) {
      throw err;
    }
  }

  async remove(maDanhMuc: string) {
    try {
      const findOne = await this.categoryRepository.findOneOrFail({
        where: { maDanhMuc },
      });
      return await this.categoryRepository.remove(findOne);
    } catch (err) {
      throw err;
    }
  }
}
