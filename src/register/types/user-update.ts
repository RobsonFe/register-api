import { IsNumber, IsString } from 'class-validator';

export class UserUpdate {
  @IsString()
  readonly name?: string;
  @IsNumber()
  readonly salary?: number;
  @IsString()
  readonly position?: string;
}
