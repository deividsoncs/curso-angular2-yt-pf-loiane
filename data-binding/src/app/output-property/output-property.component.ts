import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  constructor() { }

  @Input() valor: number = 0;

  mudouValor = new EventEmitter(); 

  onClick(){
    alert("Clicou no botão!")
  }

  onPlus() {
    this.valor++;
  }

  onMinus() {
    this.valor--;
  }




  ngOnInit(): void {
  }

}
