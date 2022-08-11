import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  //ou declara aqui nos inputs as propertys do componente. 
  //inputs: ['nomeCurso:nome']
})
export class InputPropertyComponent implements OnInit {

  //ou utilizar o decorator para marcar a property externa do componente
  @Input('nome') 
  nomeCurso: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
