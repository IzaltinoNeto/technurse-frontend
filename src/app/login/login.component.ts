
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  constructor(private authenticationService : AuthenticationService) { 
      this.loginForm =  new FormBuilder().group({
        "email": new FormControl("",[Validators.required, Validators.email]),
        "password": new FormControl("", Validators.required)
    });
  }

  ngOnInit() {

  }

  login(){
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.authenticationService.login(email,password).subscribe((data)=>{
      console.log("Registrado: ", data);
      alert("Usuário registrado com sucesso")
    })
  }

  camposConferem() {
    return this.loginForm.value.password === this.loginForm.value.confirmarPassword;
}
}
