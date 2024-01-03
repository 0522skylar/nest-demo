import { Controller, Get, SetMetadata, UseFilters, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaException } from './AaaException';
import { AaaFilter } from './aaa.filter';
import { AaaGuard } from './aaa.guard';
import { Role } from './role'
import { Roles } from './role.decorator';
import { Aaa } from './aaa.decorator'

// 因为 Service 是可以被注入也是可以注入到别的对象的，所以用 @Injectable 声明。

// 而 Controller 只需要被注入，所以 nest 单独给它加了 @Controller 的装饰器。
@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseFilters(AaaFilter)
  // @SetMetadata('aaa', 'bbb') // 字符
  // @Aaa('admin') // 数组
  @UseGuards(AaaGuard)
  // 添加权限控制
  @Roles(Role.User)
  // 然后在 handler 上添加这个装饰器，参数为 admin，也就是给这个 handler 添加了一个 roles 为 admin 的metadata
  getHello(): string {
    // throw new AaaException('aaa', 'bbbb')
    return this.appService.getHello();
  }
}
