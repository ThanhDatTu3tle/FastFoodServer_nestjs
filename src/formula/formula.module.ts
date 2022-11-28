import { Module } from '@nestjs/common';
import { FormulaService } from './formula.service';
import { FormulaController } from './formula.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonanNguyenlieu as Formula } from 'output/entities/MonanNguyenlieu';
import { Monan as Product } from 'output/entities/Monan';
import { Nguyenlieu as Ingredient } from 'output/entities/Nguyenlieu';

@Module({
  imports: [TypeOrmModule.forFeature([Formula, Product, Ingredient])],
  controllers: [FormulaController],
  providers: [FormulaService]
})
export class FormulaModule {}
