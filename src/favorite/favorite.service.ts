import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { FavoriteRelations as relations} from 'src/relations/relations';
import { Monanyeuthich as Favorite } from 'output/entities/Monanyeuthich';
import { Monan as Product } from 'output/entities/Monan';
import { Khachhang as Customer } from 'output/entities/Khachhang';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class FavoriteService {

  constructor(
    @InjectRepository(Favorite)
    private favoriteRepository: Repository<Favorite>,

    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,

    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  async create(createFavoriteDto: CreateFavoriteDto): Promise<Favorite> {
    try {
      // Foreign key Khachhang: customer
      const customerBody = createFavoriteDto.email;
      const customers = await this.customerRepository.findOneByOrFail({
        email: customerBody
      });

      // Foreign key Monan: product
      const productBody = createFavoriteDto.maMonAn;
      const products = await this.productRepository.findOneByOrFail({
        maMonAn: productBody
      });

      // create new order
      const newFavorite = this.favoriteRepository.create();
      newFavorite.maMonAnYeuThich = createFavoriteDto.maMonAnYeuThich;
      newFavorite.maMonAn = products;
      newFavorite.email = customers;
      
      await this.favoriteRepository.save(newFavorite);
      // console.log(this.productRepository)

      const findAndReturn = await this.favoriteRepository.findOneOrFail({
        relations,
        where: { 
          maMonAnYeuThich: newFavorite.maMonAnYeuThich,
        },
      });
      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  async getAll(): Promise<Favorite[]> {
    const getAll = await this.favoriteRepository.find({
      relations,
    })
    
    return getAll;
  }

  async findCustomerAndProduct(email: string, maMonAn: string) {
    const customerProduct = await this.favoriteRepository.find({ 
      relations,
    })
    const favorite = await this.favoriteRepository.find();

    return customerProduct;
  }

  async update(maMonAnYeuThich: string, updateFavoriteDto: UpdateFavoriteDto) {
    try {
      const updateFavorite = await this.favoriteRepository.findOneByOrFail({ maMonAnYeuThich })

      await this.favoriteRepository.save({
        ...updateFavorite,
        // gioDat: updateOrderDto.gioDat,
        // ngayDat: updateOrderDto.ngayDat,
        // thanhTien: updateOrderDto.thanhTien,
        // maGiamGia: updateOrderDto.maGiamGia,
        // trangThai: updateOrderDto.trangThai,
      });

      const findAndReturn = await this.favoriteRepository.findOneOrFail({
        relations,
        where: { 
          maMonAnYeuThich: updateFavorite.maMonAnYeuThich,
        },
      });

      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  async remove(maMonAnYeuThich: string) {
    try {
      const findOne = await this.favoriteRepository.findOneOrFail({
        where: { maMonAnYeuThich },
      });
      return await this.favoriteRepository.remove(findOne);
    } catch (err) {
      throw err;
    }
  }
}
