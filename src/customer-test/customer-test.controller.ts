import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerTestService } from './customer-test.service';
import { CustomerTest } from './entities/customer-test.entity';
import { CreateCustomerTestDto } from './dto/create-customer-test.dto';
// import { UpdateCustomerTestDto } from './dto/update-customer-test.dto';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';


@ApiTags('customer-test')
@Controller('customer-test')
export class CustomerTestController {
  constructor(private readonly customerTestService: CustomerTestService) {}

  @Post()
  @ApiCreatedResponse({ type: CustomerTest })
  @ApiBadRequestResponse()
  create(@Body() createCustomerTestDto: CreateCustomerTestDto) {
    return this.customerTestService.create(createCustomerTestDto);
  }

  @Get()
  async findAll() {
    return this.customerTestService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.customerTestService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCustomerTestDto: UpdateCustomerTestDto) {
  //   return this.customerTestService.update(+id, updateCustomerTestDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.customerTestService.remove(+id);
  // }
}
