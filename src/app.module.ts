import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaModule } from './aaa/aaa.module';
import { CurdAModule } from './curd-a/curd-a.module';
import { CurdBModule } from './curd-b/curd-b.module';
import { BbbModule } from './bbb/bbb.module';
import { DynamicModuleCrudModule } from './dynamic-module-crud/dynamic-module-crud.module';

//  它有一个 AppService 声明了 @Injectable，代表这个 class 可注入，那么 nest 就会把它的对象放到 IOC 容器里
@Module({
  imports: [AaaModule, CurdAModule, CurdBModule, BbbModule, DynamicModuleCrudModule.register({
    aaa: 1234,
    bbb: 1111
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
