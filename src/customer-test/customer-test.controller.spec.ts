import { Test, TestingModule } from '@nestjs/testing';
import { CustomerTestController } from './customer-test.controller';
import { CustomerTestService } from './customer-test.service';

describe('CustomerTestController', () => {
  let controller: CustomerTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerTestController],
      providers: [CustomerTestService],
    }).compile();

    controller = module.get<CustomerTestController>(CustomerTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
