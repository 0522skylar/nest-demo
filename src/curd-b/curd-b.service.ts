import { Injectable } from '@nestjs/common';
import { CreateCurdBDto } from './dto/create-curd-b.dto';
import { UpdateCurdBDto } from './dto/update-curd-b.dto';
import { CurdAService } from 'src/curd-a/curd-a.service'

@Injectable()
export class CurdBService {
  constructor(private CurdAService: CurdAService) {

  }
  create(createCurdBDto: CreateCurdBDto) {
    return 'This action adds a new curdB';
  }

  findAll() {
    // 没有在module注入curdAService，也能使用curdAService的方法，因为curdAService是全局变量了，可以随意访问
    return `This action returns all curdB` + this.CurdAService.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} curdB`;
  }

  update(id: number, updateCurdBDto: UpdateCurdBDto) {
    return `This action updates a #${id} curdB`;
  }

  remove(id: number) {
    return `This action removes a #${id} curdB`;
  }
}
