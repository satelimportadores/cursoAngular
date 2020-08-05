import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //declaracion de variables

  title = 'Usuarios Intranet Satel';
  users = ['user1','user2','user3','user4','user5'];
  activated: boolean = true;
  nombre: string = 'Satel Importadores';
  edad: number = 35;
  //declaracion de variables

  //Crear Usuario
    name: string = 'Juan Romero';
    age: number;
    address:{
      street: string;
      city: string;
    };
    hobbies:string[];
      //constructor
          constructor(){
            this.age = 28;
            this.address = {
              street: '221',
              city:'Bogota'
            }
            this.hobbies= ['swming','read','write'];
          }
  //Crear Usuario

  //Agregar usuario con formulario
  agregarUsuario(nuevoUsuario){
    nuevoUsuario.focus();
    console.log(nuevoUsuario.value);
    this.usuarios.push(nuevoUsuario.value);
    nuevoUsuario.value = '';
    return false;
  }

  //Agregar usuario con formulario

  //Acciones con boton
  usuarios:string[] = ['usuario1','usuario2','usuario3','usuario4','usuario5'];

  sayHello(u){
    alert('Hola '+u);
  }


  deleteUser(u){
      for (let i = 0; i < this.usuarios.length; i++) {
        if (u = this.usuarios[i]) {
          this.usuarios.splice(i,1);
        }
      }
    }

  //Acciones con boton
}
