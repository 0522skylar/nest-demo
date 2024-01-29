import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AdminController } from "./admin.controller";
import { HomeController } from "./home.controller";

import { HomeService } from "./home.service";
import { AppService } from "./app.service";
import { AdminService } from "./admin.service";
import { AaaMiddleware } from "./aaa.middleware";

// IOC
@Module({
  imports: [],
  controllers: [AppController, AdminController, HomeController],
  providers: [AppService, AdminService, HomeService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AaaMiddleware).forRoutes("*");
  }
}
