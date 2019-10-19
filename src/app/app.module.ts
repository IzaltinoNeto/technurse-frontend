import { TokenInterceptor } from './auth/token.interceptor';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule, MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatProgressBarModule, MatCheckboxModule, MatIconModule, MatGridListModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProgressBarColor } from './registrar/ProgressBarColor.directive';
import { AdministracaoComponent } from './administracao/administracao.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    ProgressBarColor,
    LoginComponent,
    AdministracaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatIconModule,
    MatGridListModule
    
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
