import { ApiProperty } from '@nestjs/swagger';

export class Address {
  @ApiProperty()
  maDiaChi: string;
  @ApiProperty()
  maKhachHang: string;
  @ApiProperty()
  diaChi: string;
  @ApiProperty()
  tenDiaChi: string;
}
