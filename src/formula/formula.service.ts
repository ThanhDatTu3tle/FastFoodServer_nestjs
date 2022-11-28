import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFormulaDto } from './dto/create-formula.dto';
import { UpdateFormulaDto } from './dto/update-formula.dto';
import { FormulaRelations as relations  } from 'src/relations/relations';
import { MonanNguyenlieu as Formula } from 'output/entities/MonanNguyenlieu';
import { Monan as Product } from 'output/entities/Monan';
import { Nguyenlieu as Ingredient } from 'output/entities/Nguyenlieu';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class FormulaService {

  constructor(
    @InjectRepository(Formula)
    private formulaRepository: Repository<Formula>,
    
    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}

  async create(createFormulaDto: CreateFormulaDto): Promise<Formula> {  
    try {
      // Foreign key Monan: product
      const productBody = createFormulaDto.maMonAn;
      const products = await this.productRepository.findOneByOrFail({
        maMonAn: productBody
      });

      // Foreign key Nguyenlieu: ingredient
      const ingredientBody = createFormulaDto.maNguyenLieu;
      const ingredients = await this.ingredientRepository.findOneByOrFail({
        maNguyenLieu: ingredientBody
      });

      // create new order
      const newFormula = this.formulaRepository.create();
      newFormula.maMonAn2 = products; //*** */
      newFormula.maNguyenLieu2 = ingredients; //*** */
      newFormula.soLuong = createFormulaDto.soLuong;
      newFormula.donVi = createFormulaDto.donVi;

      await this.formulaRepository.save(newFormula);
      // console.log(this.productRepository)

      const findAndReturn = await this.formulaRepository.findOneOrFail({
        relations,
        where: { 
          maMonAn: newFormula.maMonAn,
          maNguyenLieu: newFormula.maNguyenLieu,
        },
      });
      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  async getAll(): Promise<Formula[]> {

    const getAll = await this.formulaRepository.find({
      relations,
    })
    
    return getAll;
  }

  async findProductAndIngredient(maMonAn: string, maNguyenLieu: string) {
    const productIngredient = await this.formulaRepository.find({ 
      relations,
    })
    const formula = await this.formulaRepository.find();

    return productIngredient;
  }

  async update(maMonAn: string, maNguyenLieu: string, updateFormulaDto: UpdateFormulaDto): Promise<Formula> {
    try {
      const updateFormula = await this.formulaRepository.findOneByOrFail({ maMonAn, maNguyenLieu })

      await this.formulaRepository.save({
        ...updateFormula,
        // gioDat: updateOrderDto.gioDat,
        // ngayDat: updateOrderDto.ngayDat,
        // thanhTien: updateOrderDto.thanhTien,
        // maGiamGia: updateOrderDto.maGiamGia,
        // trangThai: updateOrderDto.trangThai,
      });

      const findAndReturn = await this.formulaRepository.findOneOrFail({
        relations,
        where: { 
          maMonAn: updateFormula.maMonAn,
          maNguyenLieu: updateFormula.maNguyenLieu,
        },
      });

      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  async remove(maMonAn: string, maNguyenLieu: string) {
    try {
      const findOne = await this.formulaRepository.findOneOrFail({
        where: { maMonAn, maNguyenLieu },
      });
      return await this.formulaRepository.remove(findOne);
    } catch (err) {
      throw err;
    }
  }
}
