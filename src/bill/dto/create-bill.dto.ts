import { ApiProperty } from '@nestjs/swagger';

export class CreateBillDto {
  @ApiProperty()
  maMonAn: string;
  @ApiProperty()
  maChiTietDonHang: string;
  @ApiProperty()
  soLuong: number;
  @ApiProperty()
  thanhTien: number;
}
