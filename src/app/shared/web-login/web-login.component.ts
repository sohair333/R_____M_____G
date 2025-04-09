import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-login',
  templateUrl: './web-login.component.html',
  styleUrls: ['./web-login.component.css']
})
export class WebLoginComponent {
  username:any = '';
  password:any = '';
  loginFailed = false;
  constructor(private router: Router) {}

  login() {
    const hardcodedUser = 'admin';
    const hardcodedPass = 'password123';
  
    if (this.username === hardcodedUser && this.password === hardcodedPass) {
      console.log('Login successful');
      this.loginFailed = false;
      this.router.navigate(['/home']);
    } else {
      this.loginFailed = true;
    }
  }
  
}
