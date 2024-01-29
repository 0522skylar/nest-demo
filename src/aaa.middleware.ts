import { Injectable, NestMiddleware, Inject } from "@nestjs/common";
import { AppService } from "./app.service";

@Injectable()
export class AaaMiddleware implements NestMiddleware {
  @Inject(AppService)
  private readonly appService: AppService;

  use(req: any, res: any, next: () => void) {
    console.log("before");
    console.log("-------" + this.appService.getHello());
    next();
    console.log("after");
  }
}
