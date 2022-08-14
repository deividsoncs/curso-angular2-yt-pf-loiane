import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';

  valor: number = 5;

  deletarCiclo: boolean = false;

  mudarValor(): void{
    this.valor++;
  }

  destruirCiclo():void {
    console.log('Destruindo Ciclo!');
    this.deletarCiclo = true
  }
}
