import { ApiProperty } from '@nestjs/swagger';

export class CreateFormulaDto {
  @ApiProperty()
  maMonAn: string;
  @ApiProperty()
  maNguyenLieu: string;
  @ApiProperty()
  soLuong: number;
  @ApiProperty()
  donVi: string;
}
