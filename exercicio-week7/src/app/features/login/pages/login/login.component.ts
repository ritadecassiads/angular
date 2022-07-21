import { Router } from '@angular/router';
import { UsersService } from './../../../../shared/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  senha: string = "";
  error = false;

  constructor(
    private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  authenticate() {
    const user = this.usersService.getUserByEmailAndPassword(this.email, this.senha);

    if(user) {
      sessionStorage.setItem('user', JSON.stringify(user));
      this.router.navigateByUrl('home');
    } else {
      this.error = true;
    }
  }

}
