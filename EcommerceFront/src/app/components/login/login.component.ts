import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Token } from 'src/app/token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username !: string
  public password !: string
  public error !: string


  constructor(private usersService : UsersService, private router : Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/account')
  }
}

  logIn () {
    this.error = ''

    this.usersService.login(
      this.username, this.password).subscribe((token : Token) => {
          localStorage.setItem('token', token.token);
          this.router.navigateByUrl('/account').then(() => window.location.reload())
      }, (error : ErrorEvent) => {
          console.log(error);
          this.error = "Invalid login credentials"
      }
    )
  }
}
