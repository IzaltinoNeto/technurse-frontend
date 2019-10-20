
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { AuthFormService } from './auth-form.service';
import { FormGroup } from '@angular/forms';
import { MatProgressBar } from '@angular/material';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  registerForm: FormGroup;
  passwordErrors: any;
  cadastrado : boolean = false;
  progressColor: String[] = ['gray', 'gray', 'gray'];


  @ViewChild(MatProgressBar, { static: true }) progressBar: MatProgressBar;
  constructor(private authenticationService: AuthenticationService,
    authFormService: AuthFormService) {
    this.registerForm = authFormService.getNewFormGroup();
    this.passwordErrors = this.registerForm.controls.password.errors;
    
  }

  ngOnInit() {

  }
  calcularProgressBar() {
    this.registerForm.get('confirmarPassword').updateValueAndValidity();
    this.passwordErrors = this.registerForm.controls.password.errors;
    let progressValue = 0;
    
    if (this.passwordErrors) {
      
      if (this.passwordErrors.leastOneNumber)
        progressValue++;
      if (this.passwordErrors.leastOneUpperCaseLetter)
        progressValue++;
      if (this.passwordErrors.leastSixCharacter)
        progressValue++;
      

    switch(progressValue){
      case 0 :  this.progressColor = ['#1de9b6','#1de9b6','#1de9b6']; break;
      case 1 :  this.progressColor = ['yellow','yellow','gray']; break;
      case 2 :  this.progressColor = ['red','gray','gray']; break;
      case 3 :  this.progressColor = ['gray','gray','gray']; break;
    }
     
    } else {
      this.progressColor = ['#1de9b6', '#1de9b6', '#1de9b6'];
    }

  }
  registrar() {
    let email = this.registerForm.value.email;
    let password = this.registerForm.value.password;
    this.authenticationService.registrar(email, password).subscribe((data) => {
      this.cadastrado = true;
    })
  }

  camposConferem() {
    return this.registerForm.value.password === this.registerForm.value.confirmarPassword;
  }
}
