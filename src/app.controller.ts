import {
  Get,
  Controller,
  Post,
  Response,
  Param,
  HttpStatus,
  Request,
  Render,
} from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @Render("./index")
  getHello(@Response() res): object {
    // res.render('./views/index.html');
    return { name: "张三" };
  }
  @Get("/active")
  @Render("./active")
  user() {
    return {
      name: "activePage",
    };
  }
  @Get("/test")
  test(@Response() res) {
    return res.render("./error");
  }
}
