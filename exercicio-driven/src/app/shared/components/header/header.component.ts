import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user?: User;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const userSessionStorage = sessionStorage.getItem('user');
      if(userSessionStorage) {
        this.user = JSON.parse(userSessionStorage)
      }
  }

  exit(){
    sessionStorage.clear();
    this.router.navigateByUrl('login');
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
