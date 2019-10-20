import { AuthGuardService as AuthGuard } from './service/auth-guard.service';
import { AdministracaoComponent } from './administracao/administracao.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/administracao',
    pathMatch: 'full'
  },
  {
    path: 'administracao',
    component: AdministracaoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registrar',
    component: RegistrarComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
