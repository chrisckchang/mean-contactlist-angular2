import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login = () => {
    this.authService.login();
  };

  isLoggedIn = () => {
    return this.authService.isLoggedIn();
  };

  logout = () => {
    this.authService.logout();
  };

}
