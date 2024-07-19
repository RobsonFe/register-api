import { UserCreate } from './../types/user-create';
import { Injectable } from '@nestjs/common';
import { UserUpdate } from '../types/user-update';

@Injectable()
export class RegisterService {
    register: UserCreate[] = [
        {
            id: 1,
            name: "João Silva",
            salary: 3000,
            position: "Software Developer"
        }
    ];

    // Listar Funcionários
    list():UserCreate[]{
        return this.register;
    }

    //Buscar pelo ID
    findById(id: number):UserCreate{
        return this.register.find((user)=> user.id == id);
    }

    //Salvar
    save(register:UserCreate){
        return this.register.push(register);
    }

    //Atualizar
    update(id: number, user:UserUpdate){
        this.register.forEach((user)=>{
            if(id== user.id){
                const index = this.register.findIndex(user => user.id == id)
                this.register[index] = {
                    id,
                    ...user
                }
            }
        })
        return
    }

    // Deletar
    delete(id: number){
        const index = this.register.findIndex((register)=> register.id === id)
        this.register.slice(index,1);
    }
}
