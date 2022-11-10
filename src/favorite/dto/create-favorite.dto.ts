import { ApiProperty } from '@nestjs/swagger';

export class CreateFavoriteDto {
  @ApiProperty()
  maMonAnYeuThich: string;
  @ApiProperty()
  maMonAn: string;
  @ApiProperty()
  email: string;
}
