import { User } from './../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<User> = [
    {
      id: 1,
      nome: 'Rita Damasceno',
      email: 'ritads@gmail.com',
      senha: '123456',

    }
  ];

  constructor() { }

  getUsers() {
    return this.users
  }

  getUserByEmailAndPassword(email: string, password: String) {
    return this.users.find((user) => user.email === email && user.senha === password)
  }
}
