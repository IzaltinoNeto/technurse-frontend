
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  constructor(private authenticationService : AuthenticationService,
    public matSnackBar: MatSnackBar ) { 
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
      this.abrirSnackBar("Usuário Logado!",null, "green-snackbar")        
        
    })
  }

  camposConferem() {
    return this.loginForm.value.password === this.loginForm.value.confirmarPassword;
}

abrirSnackBar(message: string, action: string, classe: string) {
  this.matSnackBar.open(message, action, {
      duration: 3000,
      panelClass: [classe]
  });
}
}
