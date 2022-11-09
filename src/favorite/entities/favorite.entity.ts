import { ApiProperty } from '@nestjs/swagger';

export class Favorite {
  @ApiProperty()
  maMonAnYeuThich: string;
  @ApiProperty()
  maMonAn: string;
  @ApiProperty()
  maKhachHang: string;
}
