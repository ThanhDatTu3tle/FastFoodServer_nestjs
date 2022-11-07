import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRelations as relations } from 'src/relations/relations';
import { Monan as Product } from '../../output/entities/Monan';
import { Danhmuc as Category } from '../../output/entities/Danhmuc';
import { Repository, getManager } from 'typeorm';
// import { markAsUntransferable } from 'worker_threads';

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
      const categories = await this.categoriesRepository.findOneByOrFail({
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
      // console.log(this.productRepository)

      const findAndReturn = await this.productRepository.findOneOrFail({
        relations,
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

  async findCategory(maDanhMuc: string): Promise<Product[]> {
    const category = await this.productRepository.find({ 
      relations,
    })
    const product = await this.productRepository.find();

    const arrChicken = [];
    const arrHamburger = [];
    for (let i = 0; i < product.length; i++) {
      if (product[i].maMonAn.charAt(5) === '0') {
        arrChicken.push(product[i])
      } else if (product[i].maMonAn.charAt(5) === '1') {
        arrHamburger.push(product[i])
      }
      // ...
    }

    // console.log('arrChicken: ', arrChicken.length);
    // console.log('arrHamburger: ', arrHamburger.length);

    const start = 0;
    const end_start = arrChicken.length;

    if (maDanhMuc === 'MDM01') {
      return category.slice(start, end_start); 
    } else if (maDanhMuc === 'MDM02') {
      return category.slice(end_start, end_start + arrHamburger.length); 
    } 
    // ...
  }

  // }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} product`;
  // }
}
