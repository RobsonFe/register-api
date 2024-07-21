import { UserCreate } from './../types/user-create';
import { Injectable } from '@nestjs/common';
import { UserUpdate } from '../types/user-update';

@Injectable()
export class RegisterService {
  register: UserCreate[] = [
    {
      id: 1,
      name: 'João Silva',
      salary: 3000,
      position: 'Software Developer',
    },
  ];

  // Listar Funcionários
  list(): UserCreate[] {
    return this.register;
  }

  //Buscar pelo ID
  findById(id: number): UserCreate {
    return this.register.find(user => user.id == id);
  }

  //Salvar
  save(register: UserCreate): UserCreate {
    this.register.push(register);
    return register;
  }

  //Atualizar
  update(id: number, UserUpdate: any) {
    const existingRegister = this.findById(id);
    if (existingRegister) {
      const index = this.register.findIndex(user => user.id === id);
      this.register[index] = {
        id,
        ...UserUpdate,
      };
    }
  }

  // Deletar
  delete(id: number): boolean {
    const index = this.register.findIndex(register => register.id === id);
    if (index !== -1) {
      this.register.splice(index, 1);
      return true;
    }
    return false;
  }
}
