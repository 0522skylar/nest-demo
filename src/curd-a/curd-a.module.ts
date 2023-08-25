import { Global, Module } from '@nestjs/common';
import { CurdAService } from './curd-a.service';
import { CurdAController } from './curd-a.controller';
// 不过全局模块还是尽量少用，不然注入的很多 provider 都不知道来源，会降低代码的可维护性。
@Global() // 申请为全局变量
@Module({
  controllers: [CurdAController],
  providers: [CurdAService],
  exports: [CurdAService]
})
export class CurdAModule {}
