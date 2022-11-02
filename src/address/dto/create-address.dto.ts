import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiProperty()
  maDiaChi: string;
  @ApiProperty()
  maKhachHang: string;
  @ApiProperty()
  diaChi: string;
  @ApiProperty()
  tenDiaChi: string;
}
