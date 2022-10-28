import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty()
  maMonAn: string;
  @ApiProperty()
  maDanhMuc: string;
  @ApiProperty()
  tenMonAn: string;
  @ApiProperty()
  moTaChiTiet: string;
  @ApiProperty()
  hinhAnhMonAn: string;
  @ApiProperty()
  giaTien: number;
  @ApiProperty()
  yeuThich: boolean;
}
