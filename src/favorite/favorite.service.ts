import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
// import { UpdateFavoriteDto } from './dto/update-favorite.dto';
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
      const customerBody = createFavoriteDto.maKhachHang;
      const customers = await this.customerRepository.findOneByOrFail({
        maKhachHang: customerBody
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
      newFavorite.maKhachHang = customers;
      
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

  findAll() {
    return `This action returns all favorite`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} favorite`;
  // }

  // update(id: number, updateFavoriteDto: UpdateFavoriteDto) {
  //   return `This action updates a #${id} favorite`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} favorite`;
  // }
}