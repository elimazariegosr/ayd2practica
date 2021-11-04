import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }
  es_login = 1
  es_registrar = 0
  es_home = 0
  usuarios:any =[]
  usuario = ""
  ngOnInit(): void {
  }

  registrar(user:any, nombre:any, pass:any){
    if(user != ""){

      for(let x of this.usuarios){
        if(x.user == user){
          return
        }
      }
      this.usuarios.push({user,nombre, pass})
      this.es_login = 1
      this.es_registrar = 0
    }
  }
  alerta = ''
  login(user:any, pass:any){
    for(let x of this.usuarios){
      if(x.user == user && x.pass == pass){
        this.usuario = x.nombre
        this.es_login = 0
        this.es_registrar = 0
        this.es_home = 1
        return
      }
    }
    this.alerta = 'usuario incorrecto'
    

    
  }
  
}
