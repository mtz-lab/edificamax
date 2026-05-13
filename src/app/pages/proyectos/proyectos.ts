import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos {

  proyectos = [
    {
      id: 'lienzo',
      nombre: 'Lienzo Charro Ignacio León Ornelas',
      categoria: 'Infraestructura',
      ubicacion: 'Irapuato, Guanajuato',
      metros: '5,000 m²',
      anio: '2022',
      fotos: [
        'assets/images/L4.png',
        'assets/images/L1.png',
        'assets/images/L2.png',
      ]
    },
    {
      id: 'diga',
      nombre: 'Proyecto DIGA',
      categoria: 'Puerto Interior',
      ubicacion: 'Silao, Guanajuato',
      metros: '3,200 m²',
      anio: '2023',
      fotos: [
        'assets/images/diga.png',
      ]
    },
    {
      id: 'olindo',
      nombre: "Residencias O'lindo",
      categoria: 'Residencial',
      ubicacion: 'Irapuato, Guanajuato',
      metros: '280 m² por unidad',
      anio: '2021',
      fotos: [
        'assets/images/casas.png',
        'assets/images/c1.png',
        'assets/images/casa4.png',
      ]
    },
    {
      id: 'bbva',
      nombre: 'Construcción de Banco BBVA',
      categoria: 'Comercial',
      ubicacion: 'Queretaro',
      metros: '800 m²',
      anio: '2020',
      fotos: [
        'assets/images/4.png',
        'assets/images/1.png',
        'assets/images/2.png',
        'assets/images/3.png',
      ]
    }
  ];

  proyectoSeleccionado: any = null;
  fotoActual = 0;

  // ← MÉTODO NUEVO
  getPortada(proyecto: any): string {
    return proyecto.fotos[0];
  }

  abrirModal(proyecto: any) {
    this.proyectoSeleccionado = proyecto;
    this.fotoActual = 0;
  }

  fotoAnterior() {
    if (this.fotoActual > 0) {
      this.fotoActual--;
    }
  }

  fotoSiguiente() {
    if (this.fotoActual < this.proyectoSeleccionado.fotos.length - 1) {
      this.fotoActual++;
    }
  }
}
