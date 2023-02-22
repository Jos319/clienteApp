import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  usuarios = [
    { id: 1,
      nombre: 'juan jose',
      email: 'juanjose@gmail.com',
      rol: 'user'
    },
    {
      id: 2,
      nombre: 'david esteban',
      email: 'davidesteban@gmail.com',
      rol: 'user',
    },
    {
      id: 3,
      nombre: 'Jose martínez',
      email: 'josemartinez@gmail.com',
      rol: 'user',
    },
    {
      id: 4,
      nombre: 'Pablo Castillo',
      email: 'pablocastillo@gmail.com',
      rol: 'admin',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
