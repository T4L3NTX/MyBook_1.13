import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { ApiService } from '../services/api.service'; // Servicio de API

@Component({
  selector: 'app-ingles',
  templateUrl: './ingles.page.html',
  styleUrls: ['./ingles.page.scss'],
})
export class InglesPage implements OnInit {

  fecha: string; // Fecha actual
  ings: Array<{ fecha: string, fechaTexto: string, texto: string }> = []; // Lista de inglés
  ingActual: { fecha: string, fechaTexto: string, texto: string } | null = null; // Entrada actual

  constructor(
    public toastController: ToastController,
    private apiService: ApiService // Inyectamos el servicio ApiService
  ) {
    moment.locale('es-mx');
    this.fecha = moment().format(); // Asigna la fecha actual
    this.cargarIngs(); // Cargar las entradas de inglés
  }

  ngOnInit() {}

  // Método para cargar las entradas de inglés desde la API
  cargarIngs() {
    const fecha = moment(this.fecha).format('DD-MM-YY');
    
    this.apiService.obtenerIngl().subscribe(data => {
      this.ings = data || []; // Si no hay datos, inicializamos como array vacío
      
      // Buscar la entrada actual
      const ingExistente = this.ings.find(elemento => elemento.fecha === fecha);

      if (ingExistente) {
        this.ingActual = ingExistente; // Asignamos la entrada existente
      } else {
        this.inicializarNuevoIng(); // Crear una nueva entrada si no existe
      }
    });
  }

  // Método para inicializar una nueva entrada de inglés
  inicializarNuevoIng() {
    const fecha = moment(this.fecha).format('DD-MM-YY');
    const dia = moment(this.fecha).format('DD');
    const mes = moment(this.fecha).format('MMMM');
    const year = moment(this.fecha).format('YYYY');

    this.ingActual = {
      fechaTexto: `${dia} de ${mes} del ${year}`, // Fecha formateada
      fecha: fecha, // Fecha corta
      texto: '' // Texto vacío inicialmente
    };
  }

  // Método para guardar la entrada de inglés actual
  async guardar() {
    if (!this.ingActual) return; // Si no hay entrada actual, no hacemos nada

    const fecha = moment(this.fecha).format('DD-MM-YY');
    const ingExistente = this.ings.find(elemento => elemento.fecha === fecha);

    if (ingExistente) {
      // Actualizar la entrada existente en la API
      this.apiService.guardarIngl(this.ingActual).subscribe();
    } else {
      // Guardar una nueva entrada
      this.guardarItem(this.ingActual);
    }

    // Mostrar mensaje de confirmación
    const toast = await this.toastController.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();
  }

  // Método para agregar una nueva entrada de inglés al array y a la API
  guardarItem(ing: { fecha: string, fechaTexto: string, texto: string }) {
    this.ings.push(ing); // Añadimos la nueva entrada al array local
    this.apiService.guardarIngl(ing).subscribe(); // Guardamos la entrada en la API
  }
}
