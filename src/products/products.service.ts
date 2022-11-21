import { ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
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

  async findCategory(maDanhMuc: string) {
    const category = await this.productRepository.find({ 
      relations,
    })
    const product = await this.productRepository.find();

    const arrChicken = [];
    const arrHamburger = [];
    const arrRicepasta = [];
    for (let i = 0; i < product.length; i++) {
      if (product[i].maMonAn.charAt(5) === '0') {
        arrChicken.push(product[i])
      } else if (product[i].maMonAn.charAt(5) === '1') {
        arrHamburger.push(product[i])
      } else if (product[i].maMonAn.charAt(5) === '2') {
        arrRicepasta.push(product[i])
      }
      // ...
    }

    const start = 0;
    const end_start = arrChicken.length;

    if (maDanhMuc === 'MDM01') {
      return category.slice(start, end_start); 
    } else if (maDanhMuc === 'MDM02') {
      return category.slice(end_start, end_start + arrHamburger.length); 
    } else if (maDanhMuc === 'MDM03') {
      return category.slice(end_start + arrHamburger.length, end_start + arrHamburger.length + arrRicepasta.length); 
    } 
    // ...
  }

  async update(
    maMonAn: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    try {
      const updateProduct = await this.productRepository.findOneByOrFail({ maMonAn })

      await this.productRepository.save({
        ...updateProduct,
        tenMonAn: updateProductDto.tenMonAn,
        hinhAnhMonAn: updateProductDto.hinhAnhMonAn,
        giaTien: updateProductDto.giaTien,
      });

      const findAndReturn = await this.productRepository.findOneOrFail({
        relations,
        where: { maMonAn: updateProduct.maMonAn },
      });

      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  async remove(maMonAn: string) {
    try {
      //Delete apartment
      const findOne = await this.productRepository.findOneOrFail({
        where: { maMonAn },
      });
      return await this.productRepository.remove(findOne);
    } catch (err) {
      throw err;
    }
  }
}
