import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://loiane.com";

  urlImagem: string = "https://img.freepik.com/fotos-gratis/trabalhando-no-codigo_1098-19858.jpg";

  cursoAngular: boolean = true;

  getValor(){
    return 1;
  }

  getCurtir() {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
