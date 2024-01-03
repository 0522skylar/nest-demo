import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { DynamicModuleCrudService } from './dynamic-module-crud.service';
import { CreateDynamicModuleCrudDto } from './dto/create-dynamic-module-crud.dto';
import { UpdateDynamicModuleCrudDto } from './dto/update-dynamic-module-crud.dto';

@Controller('dynamic-module-crud')
export class DynamicModuleCrudController {
  constructor(private readonly dynamicModuleCrudService: DynamicModuleCrudService, @Inject('CONFIG_OPTIONS') private configOptions: Record<string, any>) {}

  @Post()
  create(@Body() createDynamicModuleCrudDto: CreateDynamicModuleCrudDto) {
    return this.dynamicModuleCrudService.create(createDynamicModuleCrudDto);
  }

  @Get()
  findAll() {
    console.log(this.configOptions);
    return this.dynamicModuleCrudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dynamicModuleCrudService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDynamicModuleCrudDto: UpdateDynamicModuleCrudDto) {
    return this.dynamicModuleCrudService.update(+id, updateDynamicModuleCrudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dynamicModuleCrudService.remove(+id);
  }
}
