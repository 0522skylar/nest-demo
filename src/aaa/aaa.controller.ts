import {
  Body,
  Get,
  Controller,
  Param,
  Query,
  Post,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { CreatePersonDto } from '../dto/create-person';

@Controller('api/person')
export class AaaController {
  @Get()
  getHello(): string {
    return 'hello world!!!';
  }
  // query参数
  // http://localhost:3000/api/person/find?name=zhangshan&age=124
  // 要放在url param前面
  @Get('find')
  query(@Query('name') name: string, @Query('age') age: number) {
    console.log(name, age, 1111111);
    debugger;
    return `find received: name = ${name}; age = ${age}`;
  }
  // url param
  // http://localhost:3000/api/person/1111111
  @Get(':id')
  urlParam(@Param('id') id: string) {
    return 'received: id=' + id;
  }

  // form urlencoded
  // // 用 Nest 接收的话，使用 @Body 装饰器，Nest 会解析请求体，然后注入到 dto 中。
  // dto 是 data transfer object，就是用于封装传输的数据的对象：
  @Post()
  body(@Body() createPersonDto: CreatePersonDto) {
    return `received: ${JSON.stringify(createPersonDto)}`;
  }

  // json
  // 后端代码同样使用 @Body 来接收，不需要做啥变动。form urlencoded 和 json 都是从 body 取值，Nest 内部会根据 content type 做区分，使用不同的解析方式。

  // form data
  @Post('file')
  @UseInterceptors(
    AnyFilesInterceptor({
      dest: 'uploads/',
    }),
  )
  body2(
    @Body() createPersonDto: CreatePersonDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log(files);
    return `rece: ${JSON.stringify(createPersonDto)}`;
  }
}
