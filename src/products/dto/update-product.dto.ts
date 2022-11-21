import { PartialType } from '@nestjs/swagger';
import { EditProductDto } from './edit-product.dto';

export class UpdateProductDto extends PartialType(EditProductDto) {}

// export class UpdateProductDto {
//   tenMonAn: string;
//   hinhAnhMonAn: string;
//   giaTien: number;
// }
