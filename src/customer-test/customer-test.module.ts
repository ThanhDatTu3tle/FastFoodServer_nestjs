import { Module } from '@nestjs/common';
import { CustomerTestService } from './customer-test.service';
import { CustomerTestController } from './customer-test.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Khachhang as Customer } from '../../output/entities/Khachhang';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [CustomerTestController],
  providers: [CustomerTestService]
})
export class CustomerTestModule {}
