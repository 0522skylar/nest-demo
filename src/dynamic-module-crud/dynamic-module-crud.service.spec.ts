import { Test, TestingModule } from '@nestjs/testing';
import { DynamicModuleCrudService } from './dynamic-module-crud.service';

describe('DynamicModuleCrudService', () => {
  let service: DynamicModuleCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DynamicModuleCrudService],
    }).compile();

    service = module.get<DynamicModuleCrudService>(DynamicModuleCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
