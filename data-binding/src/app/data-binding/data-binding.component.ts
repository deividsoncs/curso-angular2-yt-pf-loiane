import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
  styles: [`
    .highlight{
      background-color: yellow;
      font-weight: bold;
    }
  `]
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://loiane.com';

  urlImagem: string =
    'https://img.freepik.com/fotos-gratis/trabalhando-no-codigo_1098-19858.jpg';

  cursoAngular: boolean = true;

  valorAtual: string = "";

  valorSalvo: string = "";

  isMouseOver: boolean = false;

  getValor() {
    return 1;
  }

  getCurtir() {
    return true;
  }

  botaoClicado(){
    return alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    let auxInput = (<HTMLInputElement> (evento.target) ).value

    console.log( auxInput );
    this.valorAtual = auxInput;
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  setMouse(mouseState: boolean){
    this.isMouseOver = mouseState;
  }

  constructor() {}

  ngOnInit(): void {}
}
