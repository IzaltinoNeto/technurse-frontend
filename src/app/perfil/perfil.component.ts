import { PerfilService } from './perfil.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  user : any = {};
  constructor(private perfilService : PerfilService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.perfilService.getUsers().subscribe(res=>{
      this.user = res;
    })
  }

}
