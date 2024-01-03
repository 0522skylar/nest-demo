import { Injectable } from '@nestjs/common';
import { CreateDynamicModuleCrudDto } from './dto/create-dynamic-module-crud.dto';
import { UpdateDynamicModuleCrudDto } from './dto/update-dynamic-module-crud.dto';

@Injectable()
export class DynamicModuleCrudService {
  create(createDynamicModuleCrudDto: CreateDynamicModuleCrudDto) {
    return 'This action adds a new dynamicModuleCrud';
  }

  findAll() {
    return `This action returns all dynamicModuleCrud`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dynamicModuleCrud`;
  }

  update(id: number, updateDynamicModuleCrudDto: UpdateDynamicModuleCrudDto) {
    return `This action updates a #${id} dynamicModuleCrud`;
  }

  remove(id: number) {
    return `This action removes a #${id} dynamicModuleCrud`;
  }
}
