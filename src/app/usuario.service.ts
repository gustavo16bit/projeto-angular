import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario{
    let usuario = new Usuario()
    usuario.nome = "Gustavo"
    usuario.email = "gustavo@email.com"

    return usuario
  }

public listaUsuario():Usuario[]{
  return[
    {
      nome:"Gustavo",
      email:"gustavo@email.com"
    },
    {
      nome:"Alice",
      email:"Alice@email.com"
    },
    {
      nome:"Paulo",
      email:"paulo@email.com"
    },
    {
      nome:"Joao",
      email:"joao@email.com"
    }
  ]
}

}
