import { PartialType } from '@nestjs/mapped-types';
import { UserCreate } from './user-create';
export class UserUpdate extends PartialType(UserCreate) {}
