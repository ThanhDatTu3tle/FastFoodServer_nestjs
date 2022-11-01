import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
// import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Khachhang as Customer } from 'output/entities/Khachhang';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class CustomerService {

  constructor(
    @InjectRepository(Customer)
    private productRepository: Repository<Customer>,

    // @InjectRepository(Category)
    // private categoryRepository: Repository<Category>
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {

    // create new categories
    const newCustomer = this.productRepository.create();
    newCustomer.maKhachHang = createCustomerDto.maKhachHang;
    newCustomer.hoTen = createCustomerDto.hoTen;
    newCustomer.ngaySinh = createCustomerDto.ngaySinh;
    newCustomer.soDienThoai = createCustomerDto.soDienThoai;
    newCustomer.email = createCustomerDto.email;
    newCustomer.matKhau = createCustomerDto.matKhau;
    newCustomer.hinhAnh = createCustomerDto.hinhAnh;

    await this.productRepository.save(newCustomer);
  }

  async getAll() {
    return this.productRepository.find();
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
