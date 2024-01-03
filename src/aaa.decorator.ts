import { SetMetadata } from "@nestjs/common";

// 装饰器
// 往修饰的目标上添加 roles 的 metadata
export const Aaa = (...args: string[]) => SetMetadata('aaa', args);