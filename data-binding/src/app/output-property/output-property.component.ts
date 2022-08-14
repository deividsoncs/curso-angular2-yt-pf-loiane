import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  constructor() { }

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter(); 

  //faz o bind resgatando o HTMLElement em tela para a lógica do componente
  @ViewChild('campoInput') campoValorInput: ElementRef = Object();

  onClick(){
    alert("Clicou no botão!")
  }

  setPlus() {
    //this.valor++;
    //this.mudouValor.emit({novoValor: this.valor});
    
    //poderia manipular o input aqui
    console.log(this.campoValorInput)
    this.campoValorInput.nativeElement.value++;
  }

  setMinus() {
   // this.valor--;
    this.mudouValor.emit({novoValor: this.valor})
  }

  ngOnInit(): void {
  }

}
