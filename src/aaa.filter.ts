import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { AaaException } from './AaaException'
import { Response } from 'express'; // 不使用类型，status会报ts错
@Catch(AaaException)
export class AaaFilter implements ExceptionFilter {
  catch(exception: AaaException, host: ArgumentsHost) {
    // console.log(exception, host)
    if (host.getType() === 'http') {
      const ctx = host.switchToHttp()
      const response = ctx.getResponse<Response>()
      // const request = ctx.getRequest<Request>()

      response.status(500).json({
        test: exception.aaa,
        bTest: exception.bbb
      });
    } else if (host.getType() === 'ws') {

    } else if (host.getType() === 'rpc') {

    }
  }
}