import { Test, TestingModule } from '@nestjs/testing';
import { DynamicModuleCrudController } from './dynamic-module-crud.controller';
import { DynamicModuleCrudService } from './dynamic-module-crud.service';

describe('DynamicModuleCrudController', () => {
  let controller: DynamicModuleCrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DynamicModuleCrudController],
      providers: [DynamicModuleCrudService],
    }).compile();

    controller = module.get<DynamicModuleCrudController>(DynamicModuleCrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
