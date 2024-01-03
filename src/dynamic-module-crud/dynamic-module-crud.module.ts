import { Module, DynamicModule } from '@nestjs/common';
import { DynamicModuleCrudService } from './dynamic-module-crud.service';
import { DynamicModuleCrudController } from './dynamic-module-crud.controller';

@Module({
  controllers: [DynamicModuleCrudController],
  providers: [DynamicModuleCrudService]
})
export class DynamicModuleCrudModule {
  static register(options: Record<string, any>): DynamicModule {
    return {
      module: DynamicModuleCrudModule,
      controllers: [DynamicModuleCrudController],
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
        DynamicModuleCrudService,
      ],
      exports: []
    };
  }
}
