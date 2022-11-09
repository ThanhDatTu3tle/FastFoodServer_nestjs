import { Test, TestingModule } from '@nestjs/testing';
import { CustomerTestService } from './customer-test.service';

describe('CustomerTestService', () => {
  let service: CustomerTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerTestService],
    }).compile();

    service = module.get<CustomerTestService>(CustomerTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
