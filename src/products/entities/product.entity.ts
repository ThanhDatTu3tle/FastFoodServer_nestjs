import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty()
  maMonAn: string;
  @ApiProperty()
  tenMonAn: string;
  @ApiProperty()
  chiTiet: string;
  @ApiProperty()
  hinhAnhMonAn: string;
  @ApiProperty()
  soLuong: number;
  @ApiProperty()
  monAnKem: string;
  @ApiProperty()
  giaTien: number;
  @ApiProperty()
  giaGoc: number;
  @ApiProperty()
  giamGia: number;
  @ApiProperty()
  yeuThich: boolean;
  @ApiProperty()
  maDanhMuc: string;
}
