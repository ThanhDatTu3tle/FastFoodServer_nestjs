import { ApiProperty } from '@nestjs/swagger';
// import { Danhmuc } from 'output/entities/Danhmuc';

export class EditProductDto {
  
  // @ApiProperty()
  // maMonAn: string;
  // @ApiProperty()
  // maDanhMuc?: string;
  @ApiProperty()
  tenMonAn: string;
  @ApiProperty()
  hinhAnhMonAn: string;
  // @ApiProperty()
  // moTaChiTiet: string;
  @ApiProperty()
  giaTien: number;
  // @ApiProperty()
  // yeuThich: boolean;
}
