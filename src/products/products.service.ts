import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRelations as relations } from 'src/relations/relations';
import { Monan as Product } from '../../output/entities/Monan';
import { Danhmuc as Category } from '../../output/entities/Danhmuc';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {  
    try {
      // Foreign key Danhmuc: categories
      const categoriesBody = createProductDto.maDanhMuc;
      const categories = await this.categoriesRepository.findOneBy({
        maDanhMuc: categoriesBody
      });

      // create new product
      const newProduct = this.productRepository.create();
      newProduct.maMonAn = createProductDto.maMonAn;
      newProduct.maDanhMuc = categories;
      newProduct.tenMonAn = createProductDto.tenMonAn;
      newProduct.hinhAnhMonAn = createProductDto.hinhAnhMonAn;
      newProduct.moTaChiTiet = createProductDto.moTaChiTiet;
      newProduct.giaTien = createProductDto.giaTien;
      newProduct.yeuThich = createProductDto.yeuThich;

      await this.productRepository.save(newProduct);

      const findAndReturn = await this.productRepository.findOneOrFail({
        relations: relations,
        where: { maMonAn: newProduct.maMonAn },
      });
      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  async getAll(): Promise<Product[]> {

    const getAll = await this.productRepository.find({
      relations,
    })
    
    return getAll;
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
