import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  
  @ApiProperty()
  maMonAn: string;
  @ApiProperty()
  maDanhMuc: string;
  @ApiProperty()
  tenMonAn: string;
  @ApiProperty()
  hinhAnhMonAn: string;
  @ApiProperty()
  moTaChiTiet: string;
  @ApiProperty()
  giaTien: number;
  @ApiProperty()
  yeuThich: boolean;
}
