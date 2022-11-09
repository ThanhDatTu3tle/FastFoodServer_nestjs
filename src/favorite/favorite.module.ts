import { Module } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Monanyeuthich as Favorite } from 'output/entities/Monanyeuthich';
import { Khachhang as Customer } from 'output/entities/Khachhang';
import { Monan as Product } from 'output/entities/Monan';

@Module({
  imports: [TypeOrmModule.forFeature([Favorite, Customer, Product])],
  controllers: [FavoriteController],
  providers: [FavoriteService]
})
export class FavoriteModule {}
