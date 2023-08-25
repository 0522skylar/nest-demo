import { PartialType } from '@nestjs/mapped-types';
import { CreateCurdADto } from './create-curd-a.dto';

export class UpdateCurdADto extends PartialType(CreateCurdADto) {}
