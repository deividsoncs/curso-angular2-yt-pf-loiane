import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { DetalheComponent } from './detalhe/detalhe.component';



@NgModule({
  declarations: [
    CursosComponent,
    DetalheComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
