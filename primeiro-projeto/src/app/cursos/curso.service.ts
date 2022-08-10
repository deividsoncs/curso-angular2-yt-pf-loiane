import { Injectable } from '@angular/core';

@Injectable(
  //ou registra aqui ou no module respectivo.
  //{
  //providedIn: 'root'
  //}
)
export class CursoService {

  getCursos = () =>  {
    return ['Java', 'ExtJS', 'Angular']
  }

  constructor() { }
}
