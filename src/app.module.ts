import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaModule } from './aaa/aaa.module';

//  它有一个 AppService 声明了 @Injectable，代表这个 class 可注入，那么 nest 就会把它的对象放到 IOC 容器里
@Module({
  imports: [AaaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
