import { PartialType } from '@nestjs/mapped-types';
import { CreateCurdBDto } from './create-curd-b.dto';

export class UpdateCurdBDto extends PartialType(CreateCurdBDto) {}
