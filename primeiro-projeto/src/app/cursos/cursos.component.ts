import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
   
  cursos: string[] = [];

  constructor(private cursoService: CursoService) { 

    this.nomePortal = 'https://argovix.com.br';
    

    this.cursos = cursoService.getCursos()

  }

  ngOnInit(): void {
  }

}
