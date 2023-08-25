import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CurdBService } from './curd-b.service';
import { CreateCurdBDto } from './dto/create-curd-b.dto';
import { UpdateCurdBDto } from './dto/update-curd-b.dto';

@Controller('curd-b')
export class CurdBController {
  constructor(private readonly curdBService: CurdBService) {}

  @Post()
  create(@Body() createCurdBDto: CreateCurdBDto) {
    return this.curdBService.create(createCurdBDto);
  }

  @Get()
  findAll() {
    return this.curdBService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.curdBService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCurdBDto: UpdateCurdBDto) {
    return this.curdBService.update(+id, updateCurdBDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.curdBService.remove(+id);
  }
}
