import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { join } from "path";
import { NestExpressApplication } from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, "..", "public"));
  app.setBaseViewsDir("views"); //模板引擎目录
  app.setViewEngine("ejs"); //模板渲染引擎
  await app.listen(3000);
}
bootstrap();
