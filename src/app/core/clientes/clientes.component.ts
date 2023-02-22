import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  clientes = [
    {
      id: 1,
      nit: '1232544k',
      nombre: 'jusan jose',
      apellido: 'Solis',
      telefono: '1234568',
      direccion: 'Huehuetenango',
    },
    {
      id: 2,
      nit: '51509455',
      nombre: 'david esteban',
      apellido: 'Monzon',
      telefono: '3215647',
      direccion: 'Aguacatan',
    },
    {
      id: 3,
      nit: '1485335k',
      nombre: 'Jose martínez',
      apellido: 'Martinez',
      telefono: '55552222',
      direccion: 'Chiantla',
    },
    {
      id: 4,
      nit: '54549346',
      nombre: 'Jose martínez',
      apellido: 'Jimenez',
      telefono: '178965820',
      direccion: 'Malacatancito',
    },
    {
      id: 5,
      nit: '13545556l',
      nombre: 'Victor',
      apellido: 'De Leon',
      telefono: '22225555',
      direccion: 'Cuilco',
    },
    {
      id: 6,
      nit: '1565465S',
      nombre: 'Herson',
      apellido: 'Morales',
      telefono: '9995587',
      direccion: 'La libertad',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
