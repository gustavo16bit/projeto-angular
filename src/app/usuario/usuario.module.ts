import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario.routing.module';
import { BrowserModule } from '@angular/platform-browser'; 
import { UsuarioCadastroComponent } from './cadastro/usuario-cadastro.component';
import { UsuarioComponent } from './usuario.component';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [UsuarioComponent, UsuarioCadastroComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,    
    FormsModule
  ]
})
export class UsuarioModule { }
