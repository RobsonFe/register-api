import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { RegisterService } from '../service/register.service';

@Controller('register/api/v1')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Get('search/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id') id: number) {
    return this.registerService.findById(id);
  }

  @Get('list')
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.registerService.list();
  }

  @Post('save')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body) {
    return this.registerService.save(body);
  }

  @Put('update/:id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: number, @Body() body) {
    return this.registerService.update(id, body);
  }

  @Delete('delete/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: number) {
    return this.registerService.delete(id);
  }
}
