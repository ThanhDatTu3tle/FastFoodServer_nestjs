import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { FormulaService } from './formula.service';
import { Formula } from './entities/formula.entity';
import { CreateFormulaDto } from './dto/create-formula.dto';
import { UpdateFormulaDto } from './dto/update-formula.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('Formula')
@Controller('formula')
export class FormulaController {
  constructor(private readonly formulaService: FormulaService) {}

  @Post()
  @ApiCreatedResponse({ type: Formula })
  @ApiBadRequestResponse()
  async create(@Body() createFormulaDto: CreateFormulaDto, @Res() res: Response) {
    try {
      const newFormula = await this.formulaService.create(
        createFormulaDto,
      );
      res.status(201).json({ success: true, body: newFormula });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Get()
  async getAll() {
    return this.formulaService.getAll();
  }

  @Get(':maMonAn/:maNguyenLieu')
  async findProductAndIngredient(
    @Param('maMonAn') maMonAn: string,
    @Param('maNguyenLieu') maNguyenLieu: string,
  ) {
    return this.formulaService.findProductAndIngredient(maMonAn, maNguyenLieu);
  }

  @Patch(':maMonAn:maNguyenLieu')
  async update(
    @Param('maMonAn') maMonAn: string, 
    @Param('maNguyenLieu') maNguyenLieu: string, 
    @Body() updateFormulaDto: UpdateFormulaDto,
    @Res() res: Response,
  ) {
    if (!updateFormulaDto) {
      res
        .status(400)
        .json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const updateFormula = await this.formulaService.update(
        maMonAn, 
        maNguyenLieu,
        updateFormulaDto,
      );
      res.status(200).json({ success: true, body: updateFormula });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Delete(':maMonAn:maNguyenLieu')
  async remove(
    @Param('maMonAn') maMonAn: string, 
    @Param('maNguyenLieu') maNguyenLieu: string, 
    @Res() res: Response
  ) {
    if (!maMonAn && !maNguyenLieu) {
      res.status(404).json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const deleteOrder = await this.formulaService.remove(maMonAn, maNguyenLieu);
      res.status(200).json({ success: true, body: deleteOrder });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }
}
