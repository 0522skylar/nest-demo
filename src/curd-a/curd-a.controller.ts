import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CurdAService } from './curd-a.service';
import { CreateCurdADto } from './dto/create-curd-a.dto';
import { UpdateCurdADto } from './dto/update-curd-a.dto';

@Controller('curd-a')
export class CurdAController {
  constructor(private readonly curdAService: CurdAService) {}

  @Post()
  create(@Body() createCurdADto: CreateCurdADto) {
    return this.curdAService.create(createCurdADto);
  }

  @Get()
  findAll() {
    return this.curdAService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.curdAService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCurdADto: UpdateCurdADto) {
    return this.curdAService.update(+id, updateCurdADto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.curdAService.remove(+id);
  }
}
