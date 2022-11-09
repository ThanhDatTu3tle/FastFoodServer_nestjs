import { PartialType } from '@nestjs/swagger';
import { CreateCustomerTestDto } from './create-customer-test.dto';

export class UpdateCustomerTestDto extends PartialType(CreateCustomerTestDto) {}
