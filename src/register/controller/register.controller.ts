import { Controller, Get, Param } from '@nestjs/common';
import { RegisterService } from '../service/register.service';

@Controller('register/api/v1')
export class RegisterController {
    constructor(
        private readonly registerService: RegisterService
    ){}
    
    @Get()
    findOne(@Param('id') id:string){
        return null
    }
}
