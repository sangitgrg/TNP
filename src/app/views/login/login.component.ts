import { Component } from '@angular/core';
import { AuthenticationService } from '../../auth/auth.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 
  public loginForm: FormGroup;
  
  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['',  [Validators.required]],
      password: ['',[Validators.required]]
  });
  }

  loginUser() {
    const data:any = {};
    data.email = this.loginForm.get('email').value;
    data.password = this.loginForm.get('password').value;
    // let serializedForm = JSON.stringify(data);
    this.authService.login(data).subscribe(
      res => 
      {localStorage.setItem('auth_token', res.token),
       this.route.navigateByUrl("/workload")},
      err => console.log(err)
    )
  }
}
