import { Controller, Get, UseFilters, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaException } from './AaaException';
import { AaaFilter } from './aaa.filter';
import { AaaGuard } from './aaa.guard';
import { Role } from './role'
import { Roles } from './role.decorator';

// 因为 Service 是可以被注入也是可以注入到别的对象的，所以用 @Injectable 声明。

// 而 Controller 只需要被注入，所以 nest 单独给它加了 @Controller 的装饰器。
@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseFilters(AaaFilter)
  @UseGuards(AaaGuard)
  @Roles(Role.Admin)
  getHello(): string {
    throw new AaaException('aaa', 'bbbb')
    return this.appService.getHello();
  }
}
