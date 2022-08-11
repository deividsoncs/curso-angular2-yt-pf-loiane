import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css'],
})
export class MeuFormComponent implements OnInit {
  @Input('nome') nome: string = '';
  @Input('pessoa') pessoa: Object = { idade: 0, nome: 'def' };

  showAlert(): void {
    alert('O nome manipulado é: ' + this.nome);
  }

  constructor() {}

  ngOnInit(): void {}
}
