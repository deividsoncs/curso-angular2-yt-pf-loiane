import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent implements OnInit {

  ativo: boolean = false;
  tamanhoFonte: string = '20';

  constructor() { }

  ngOnInit(): void {
    //todo
  }

  mudarAtivo(){
    this.ativo = !this.ativo;     
  }
}
