import { PartialType } from '@nestjs/mapped-types';
import { CreateDynamicModuleCrudDto } from './create-dynamic-module-crud.dto';

export class UpdateDynamicModuleCrudDto extends PartialType(CreateDynamicModuleCrudDto) {}
