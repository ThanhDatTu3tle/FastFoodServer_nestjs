import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderRelations as relations } from 'src/relations/relations';
import { Chitietdonhang as Order } from '../../output/entities/Chitietdonhang';
import { Khachhang as Customer } from '../../output/entities/Khachhang';
import { Danhsachdiachi as Address } from '../../output/entities/Danhsachdiachi';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class OrderService {

  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,

    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,

    @InjectRepository(Address)
    private addressRepository: Repository<Address>
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {  
    try {
      // Foreign key Khachhang: customer
      const customerBody = createOrderDto.email;
      const customers = await this.customerRepository.findOneByOrFail({
        email: customerBody
      });

      // Foreign key Danhsachdiachi: address
      const addressBody = createOrderDto.maDiaChi;
      const categories = await this.addressRepository.findOneByOrFail({
        maDiaChi: addressBody
      });

      // create new order
      const newOrder = this.orderRepository.create();
      newOrder.maChiTietDonHang = createOrderDto.maChiTietDonHang;
      newOrder.email = customers; //*** */
      newOrder.maDiaChi = categories; //*** */
      newOrder.gioDat = createOrderDto.gioDat;
      newOrder.ngayDat = createOrderDto.ngayDat;
      newOrder.thanhTien = createOrderDto.thanhTien;
      newOrder.maGiamGia = createOrderDto.maGiamGia;
      newOrder.trangThai = createOrderDto.trangThai;

      await this.orderRepository.save(newOrder);
      // console.log(this.productRepository)

      const findAndReturn = await this.orderRepository.findOneOrFail({
        relations,
        where: { 
          maChiTietDonHang: newOrder.maChiTietDonHang,
        },
      });
      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  async getAll(): Promise<Order[]> {

    const getAll = await this.orderRepository.find({
      relations,
    })
    
    return getAll;
  }

  async findCustomerAndAddress(email: string, maDiaChi: string) {
    const customerAddress = await this.orderRepository.find({ 
      relations,
    })
    const order = await this.orderRepository.find();

    return customerAddress;
  }

  async update(maChiTietDonHang, updateOrderDto: UpdateOrderDto): Promise<Order> {
    try {
      const updateOrder = await this.orderRepository.findOneByOrFail({ maChiTietDonHang })

      await this.orderRepository.save({
        ...updateOrder,
        gioDat: updateOrderDto.gioDat,
        ngayDat: updateOrderDto.ngayDat,
        thanhTien: updateOrderDto.thanhTien,
        maGiamGia: updateOrderDto.maGiamGia,
        trangThai: updateOrderDto.trangThai,
      });

      const findAndReturn = await this.orderRepository.findOneOrFail({
        relations,
        where: { 
          maChiTietDonHang: updateOrder.maChiTietDonHang,
        },
      });

      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  async remove(maChiTietDonHang: string) {
    try {
      const findOne = await this.orderRepository.findOneOrFail({
        where: { maChiTietDonHang },
      });
      return await this.orderRepository.remove(findOne);
    } catch (err) {
      throw err;
    }
  }
}
