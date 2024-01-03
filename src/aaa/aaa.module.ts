import { Module, forwardRef } from '@nestjs/common';
import { AaaController } from './aaa.controller';
import { BbbModule } from 'src/bbb/bbb.module';

@Module({
  controllers: [AaaController],
  imports: [
    forwardRef(() => BbbModule)
  ]
})
export class AaaModule {}
