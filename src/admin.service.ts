/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable, Response, Request } from "@nestjs/common";
import { join } from "path";
// const Fontmin = require("fontmin");
import * as fs from "fs";

@Injectable()
export class AdminService {
  getHello(): string {
    return "Hello World!";
  }
  getWord(@Response() res) {
    try {
      fs.readFile(
        join(__dirname, "../data/test.json"),
        "utf-8",
        function (err, data) {
          if (err) {
            console.log(err, "reading---");
            res.send({
              code: -1,
              data: "未成功读取到数据",
            });
          } else {
            const str = data.toString();
            const obj = JSON.parse(str);
            console.log("传送文字成功！");
            res.send({
              code: 200,
              ...obj,
            });
          }
        }
      );
    } catch (err) {
      res.send({
        code: -1,
        data: "未成功读取到数据",
      });
    }
  }
  getFontRes(@Response() res, @Request() req) {
    const { font, type } = req.query;
    fs.readFile(
      join(__dirname, "../data/test.json"),
      "utf-8",
      function (error, _data) {
        let { text } = JSON.parse(_data);
        const srcPath = join(__dirname, "../public/init/" + font + "." + type);

        // 文字去重
        const textArr = Array.from(new Set(text.split("")));
        text = textArr.join("");
        // 初始化
        const Fontmin = require("fontmin");
        const fontmin = new Fontmin().src(srcPath).use(
          // 字型提取插件
          Fontmin.glyph({
            text: text, // 所需文字
          })
        );
        if (font.length === 0) {
          res.send({
            code: 0,
            msg: "没有传输字体包名称",
          });
          return;
        }
        fontmin.run(function (err, files, stream) {
          if (err) {
            // 异常捕捉
            console.error(err);
          } else {
            console.log("解析完毕， 保存到路由中，没有保存到本地");
            res.send(files[0]._contents);
          }
        });
      }
    );
  }
}
