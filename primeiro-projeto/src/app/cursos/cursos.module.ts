import { CursoService } from './curso.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent,
    
  ],
  providers:[
    CursoService
  ]
})
export class CursosModule { }
