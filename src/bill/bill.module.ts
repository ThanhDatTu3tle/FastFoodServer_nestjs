import { Module } from '@nestjs/common';
import { BillService } from './bill.service';
import { BillController } from './bill.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonanDonhang as Bill } from 'output/entities/MonanDonhang';
import { Monan as Product } from 'output/entities/Monan';
import { Chitietdonhang as Order } from 'output/entities/Chitietdonhang';

@Module({
  imports: [TypeOrmModule.forFeature([Bill, Product, Order])],
  controllers: [BillController],
  providers: [BillService]
})
export class BillModule {}
