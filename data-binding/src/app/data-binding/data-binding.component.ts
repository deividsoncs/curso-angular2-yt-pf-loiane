import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
  styles: [`
    .highlight{
      background-color: yellow;
      font-weight: bold;
    }
  `],
  //outputs: ['mudouValor']
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://loiane.com';

  urlImagem: string =
    'https://img.freepik.com/fotos-gratis/trabalhando-no-codigo_1098-19858.jpg';

  cursoAngular: boolean = true;
  valorAtual: string = "";
  valorSalvo: string = "";
  isMouseOver: boolean = false;
  nomeDoCurso: string = 'Angular2'
  valorInicial: number = 12;

  nome: string = "ABC";

  pessoa: any= {
    idade: 0,
    nome: 'def'
  }

  //event customizado quando muda o valor do contador.
  onMudouValor(evento: any){
    console.log(evento.novoValor)
  }

  getValor(): number {
    return 1;
  }

  getCurtir(): boolean {
    return true;
  }

  botaoClicado(): void {
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
