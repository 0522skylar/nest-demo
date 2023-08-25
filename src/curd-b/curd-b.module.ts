import { Module } from '@nestjs/common';
import { CurdBService } from './curd-b.service';
import { CurdBController } from './curd-b.controller';
import { CurdAModule } from 'src/curd-a/curd-a.module';

@Module({
  imports: [
    // CurdAModule 局部类型需要引入
  ],
  controllers: [CurdBController],
  providers: [CurdBService]
})
export class CurdBModule {}
