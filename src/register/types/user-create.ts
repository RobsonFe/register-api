import { IsNumber, IsString } from 'class-validator';

export class UserCreate {
  readonly id: number;
  @IsString()
  readonly name: string;
  @IsNumber()
  readonly salary: number;
  @IsString()
  readonly position: string;
}
