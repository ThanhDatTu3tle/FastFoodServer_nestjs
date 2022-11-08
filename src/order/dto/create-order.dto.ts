import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  maChiTietDonHang: string;
  @ApiProperty()
  maKhachHang: string;
  @ApiProperty()
  maDiaChi: string;
  @ApiProperty()
  gioDat: Date;
  @ApiProperty()
  ngayDat: Date;
  @ApiProperty()
  thanhTien: number;
  @ApiProperty()
  maGiamGia: string;
  @ApiProperty()
  trangThai: string;
}
