import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.page.html',
  styleUrls: ['./estadistica.page.scss'],
})
export class EstadisticaPage implements OnInit {

  fecha: string; // Almacena la fecha actual
  ests: Array<{ fecha: string, fechaTexto: string, texto: string }> = []; // Almacena las estadísticas
  estActual: { fecha: string, fechaTexto: string, texto: string } | null = null; // Estadística actual, inicia como null

  constructor(public toastController: ToastController, private apiService: ApiService) {
    moment.locale('es-mx');
    this.fecha = moment().format(); // Asigna la fecha actual formateada
    this.cargarEsts(); // Carga las estadísticas desde la API
  }

  ngOnInit() {}

  // Método para cargar las estadísticas desde la API
  cargarEsts() {
    const fecha = moment(this.fecha).format('DD-MM-YY');

    this.apiService.obtenerEstc().subscribe(data => {
      this.ests = data || []; // Si no hay datos, inicializamos como array vacío

      // Buscar la estadística actual con la fecha formateada
      const estExistente = this.ests.find(elemento => elemento.fecha === fecha);

      if (estExistente) {
        this.estActual = estExistente; // Asignar la estadística existente
      } else {
        this.inicializarNuevoEst(); // Crear una nueva estadística si no existe
      }
    });
  }

  // Método para inicializar una nueva estadística
  inicializarNuevoEst() {
    const fecha = moment(this.fecha).format('DD-MM-YY');
    const dia = moment(this.fecha).format('DD');
    const mes = moment(this.fecha).format('MMMM');
    const year = moment(this.fecha).format('YYYY');

    this.estActual = {
      fechaTexto: `${dia} de ${mes} del ${year}`, // Ejemplo: 18 de octubre del 2024
      fecha: fecha, // Fecha corta, ej. 18-10-24
      texto: '' // Texto vacío inicialmente
    };
  }

  // Método para guardar la estadística actual
  async guardar() {
    if (!this.estActual) return; // Si no hay estadística actual, no hacemos nada

    const fecha = moment(this.fecha).format('DD-MM-YY');
    const estExistente = this.ests.find(elemento => elemento.fecha === fecha);

    if (estExistente) {
      // Si existe una entrada, actualizar la estadística existente en la API
      this.apiService.guardarEstc(this.estActual).subscribe();
    } else {
      // Si no existe, crear una nueva entrada
      this.guardarItem(this.estActual);
    }

    // Mostrar un mensaje de confirmación con un toast
    const toast = await this.toastController.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();
  }

  // Método para agregar una nueva estadística en el array y la API
  guardarItem(est: { fecha: string, fechaTexto: string, texto: string }) {
    this.ests.push(est); // Añadimos la nueva estadística al array local
    this.apiService.guardarEstc(est).subscribe(); // Guardamos la estadística en la API
  }
}
