import { Injectable } from '@nestjs/common';
import { CreateCurdADto } from './dto/create-curd-a.dto';
import { UpdateCurdADto } from './dto/update-curd-a.dto';

@Injectable()
export class CurdAService {
  create(createCurdADto: CreateCurdADto) {
    return 'This action adds a new curdA';
  }

  findAll() {
    return `This action returns all curdA`;
  }

  findOne(id: number) {
    return `This action returns a #${id} curdA`;
  }

  update(id: number, updateCurdADto: UpdateCurdADto) {
    return `This action updates a #${id} curdA`;
  }

  remove(id: number) {
    return `This action removes a #${id} curdA`;
  }
}
