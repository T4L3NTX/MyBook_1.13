import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { ApiService } from '../services/api.service'; // Servicio de API

@Component({
  selector: 'app-etica',
  templateUrl: './etica.page.html',
  styleUrls: ['./etica.page.scss'],
})
export class EticaPage implements OnInit {

  fecha: string; // Fecha actual
  et: Array<{ fecha: string, fechaTexto: string, texto: string }> = []; // Lista de ética
  etActual: { fecha: string, fechaTexto: string, texto: string } | null = null; // Ética actual

  constructor(
    public toastController: ToastController,
    private apiService: ApiService // Inyectamos el servicio ApiService
  ) {
    moment.locale('es-mx');
    this.fecha = moment().format(); // Asigna la fecha actual
    this.cargarEt(); // Cargar los datos de ética
  }

  ngOnInit() {}

  // Método para cargar los datos de ética desde la API
  cargarEt() {
    const fecha = moment(this.fecha).format('DD-MM-YY');

    this.apiService.obtenerEtic().subscribe(data => {
      this.et = data || []; // Si no hay datos, inicializamos como array vacío

      // Buscar la entrada actual
      const etExistente = this.et.find(elemento => elemento.fecha === fecha);

      if (etExistente) {
        this.etActual = etExistente; // Asignamos la ética existente
      } else {
        this.inicializarNuevoEt(); // Crear una nueva ética si no existe
      }
    });
  }

  // Método para inicializar una nueva entrada de ética
  inicializarNuevoEt() {
    const fecha = moment(this.fecha).format('DD-MM-YY');
    const dia = moment(this.fecha).format('DD');
    const mes = moment(this.fecha).format('MMMM');
    const year = moment(this.fecha).format('YYYY');

    this.etActual = {
      fechaTexto: `${dia} de ${mes} del ${year}`, // Fecha formateada
      fecha: fecha, // Fecha corta
      texto: '' // Texto vacío inicialmente
    };
  }

  // Método para guardar la ética actual
  async guardar() {
    if (!this.etActual) return; // Si no hay ética actual, no hacemos nada

    const fecha = moment(this.fecha).format('DD-MM-YY');
    const etExistente = this.et.find(elemento => elemento.fecha === fecha);

    if (etExistente) {
      // Actualizar la entrada existente en la API
      this.apiService.guardarEtic(this.etActual).subscribe();
    } else {
      // Guardar una nueva entrada
      this.guardarItem(this.etActual);
    }

    // Mostrar mensaje de confirmación
    const toast = await this.toastController.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();
  }

  // Método para agregar una nueva entrada de ética al array y a la API
  guardarItem(et: { fecha: string, fechaTexto: string, texto: string }) {
    this.et.push(et); // Añadimos la nueva ética al array local
    this.apiService.guardarEtic(et).subscribe(); // Guardamos la ética en la API
  }
}
