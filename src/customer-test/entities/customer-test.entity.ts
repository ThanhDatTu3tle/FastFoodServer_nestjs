import { ApiProperty } from '@nestjs/swagger';

export class CustomerTest {
  @ApiProperty()
  maKhachHang: string;
  @ApiProperty()
  hoTen: string;
  @ApiProperty()
  soDienThoai: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  matKhau: string;
  // @ApiProperty()
  // hinhAnh: string;
}
