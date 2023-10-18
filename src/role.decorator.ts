import { SetMetadata } from "@nestjs/common";
import { Role } from './role'

// 装饰器
// 往修饰的目标上添加 roles 的 metadata
export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
