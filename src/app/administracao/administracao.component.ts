import {  NursesService } from './nurses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracao',
  templateUrl: './administracao.component.html',
  styleUrls: ['./administracao.component.scss']
})
export class AdministracaoComponent implements OnInit {
  nurses : any[] = [];
  constructor(private nursesService : NursesService) { }

  ngOnInit() {
    this.buscarNurses();
  }

  buscarNurses(){
    this.nursesService.getNurse().subscribe(res=>{
      this.nurses = res.nurses;
    })
  }
}
