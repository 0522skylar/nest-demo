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

@Controller("/home")
export class HomeController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @Render("./index")
  getHello(@Response() res): object {
    // res.render('./views/index.html');
    return { name: "张三" };
  }
  @Get("/user/:id")
  user(@Response() res, @Param("id") id) {
    console.log(id);
    return res.status(HttpStatus.OK).json({
      name: "hello",
      age: 20,
    });
  }
  @Get("/test")
  test(@Response() res) {
    return res.render("./error");
  }
}
