import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { ApiService } from '../services/api.service'; 
@Component({
  selector: 'app-calidad-software',
  templateUrl: './calidad-software.page.html',
  styleUrls: ['./calidad-software.page.scss'],
})
export class CalidadSoftwarePage implements OnInit {

  fecha: string; // Fecha actual
  cals: Array<{ fecha: string, fechaTexto: string, texto: string }> = []; // Lista de registros de calidad
  calActual: { fecha: string, fechaTexto: string, texto: string } | null = null; // Registro actual

  constructor(
    public toastController: ToastController,
    private apiService: ApiService 
  ) { 
    moment.locale('es-mx');
    this.fecha = moment().format(); // Asignar la fecha actual
    this.cargarCals(); // Cargar los registros de calidad
  }

  ngOnInit() {}

  // Método para limpiar el almacenamiento local y recargar la página
  limpiarCals() {
    localStorage.removeItem('cals');
    window.location.reload(); 
  }

  // Método para cargar los registros de calidad desde la API
  cargarCals() {
    const fecha = moment(this.fecha).format('DD-MM-YY');
    
    this.apiService.obtenerCalidad().subscribe(data => {
      this.cals = data || []; // Si no hay datos, se inicializa un array vacío

      // Buscar el registro de calidad actual
      const calExistente = this.cals.find(elemento => elemento.fecha === fecha);

      if (calExistente) {
        this.calActual = calExistente; // Asignamos el registro actual
      } else {
        this.inicializarNuevoCal(); // Crear un nuevo registro si no existe
      }
    });
  }

  // Método para inicializar un nuevo registro de calidad
  inicializarNuevoCal() {
    const fecha = moment(this.fecha).format('DD-MM-YY');
    const dia = moment(this.fecha).format('DD');
    const mes = moment(this.fecha).format('MMMM');
    const year = moment(this.fecha).format('YYYY');

    this.calActual = {
      fechaTexto: `${dia} de ${mes} del ${year}`, // Formato de fecha
      fecha: fecha, // Fecha corta
      texto: '' // Texto vacío inicialmente
    };
  }

  // Método para guardar el registro de calidad actual
  async guardar() {
    if (!this.calActual) return; // Si no hay registro actual, no hacer nada

    const fecha = moment(this.fecha).format('DD-MM-YY');
    const calExistente = this.cals.find(elemento => elemento.fecha === fecha);

    if (calExistente) {
      // Actualizar el registro existente en la API
      this.apiService.guardarCalidad(this.calActual).subscribe(); 
    } else {
      // Guardar un nuevo registro
      this.guardarItem(this.calActual);
    }

    // Mostrar mensaje de confirmación
    const toast = await this.toastController.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();
  }

  // Método para agregar un nuevo registro y guardarlo en la API
  guardarItem(cal: { fecha: string, fechaTexto: string, texto: string }) {
    this.cals.push(cal); // Añadir al array local
    this.apiService.guardarCalidad(cal).subscribe(); // Guardar en la API
  }
}

