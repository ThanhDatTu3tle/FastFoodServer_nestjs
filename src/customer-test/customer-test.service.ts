import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCustomerTestDto } from './dto/create-customer-test.dto';
// import { UpdateCustomerTestDto } from './dto/update-customer-test.dto';
import { Khachhang as Customer } from 'output/entities/Khachhang';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class CustomerTestService {

  constructor(
    @InjectRepository(Customer)
    private customerTestRepository: Repository<Customer>,

    // @InjectRepository(Category)
    // private categoryRepository: Repository<Category>
  ) {}

  async create(createCustomerTestDto: CreateCustomerTestDto) {
    // create new categories
    const newCustomerTest = this.customerTestRepository.create();
    newCustomerTest.maKhachHang = `MKH-000003`;
    newCustomerTest.hoTen = createCustomerTestDto.hoTen;
    newCustomerTest.soDienThoai = createCustomerTestDto.soDienThoai;
    newCustomerTest.email = createCustomerTestDto.email;
    newCustomerTest.matKhau = createCustomerTestDto.matKhau;
    // newCustomerTest.hinhAnh = createCustomerDto.hinhAnh;

    await this.customerTestRepository.save(newCustomerTest);
  }

  async findAll() {
    return this.customerTestRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} customerTest`;
  // }

  // update(id: number, updateCustomerTestDto: UpdateCustomerTestDto) {
  //   return `This action updates a #${id} customerTest`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} customerTest`;
  // }
}
