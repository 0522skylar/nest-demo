import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AdminController } from "./admin.controller";
import { HomeController } from "./home.controller";

import { HomeService } from "./home.service";
import { AppService } from "./app.service";
import { AdminService } from "./admin.service";

@Module({
  imports: [],
  controllers: [AppController, AdminController, HomeController],
  providers: [AppService, AdminService, HomeService],
})
export class AppModule {}
