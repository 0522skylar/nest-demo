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
import { AdminService } from "./admin.service";
import { join } from "path";
import * as fs from "fs";

@Controller("/admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @Post("/send-word")
  getHello(@Response() res): any {
    this.adminService.getWord(res);
  }
  @Get("/font-test")
  user(@Response() res, @Request() req) {
    this.adminService.getFontRes(res, req);
  }
  @Get("/test")
  test(@Response() res) {
    return res.render("./error");
  }
}
