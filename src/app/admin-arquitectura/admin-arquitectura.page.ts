import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { ApiService } from '../services/api.service'; // Servicio de API
@Component({
  selector: 'app-admin-arquitectura',
  templateUrl: './admin-arquitectura.page.html',
  styleUrls: ['./admin-arquitectura.page.scss'],
})
export class AdminArquitecturaPage implements OnInit {

  fecha: string; // Fecha actual
  arqs: Array<{ fecha: string, fechaTexto: string, texto: string }> = []; // Lista de arquitecturas
  arqActual: { fecha: string, fechaTexto: string, texto: string } | null = null; // Arquitectura actual

  constructor(
    public toastController: ToastController,
    private apiService: ApiService // Inyectamos el servicio ApiService
  ) {
    moment.locale('es-mx');
    this.fecha = moment().format(); // Asigna la fecha actual
    this.cargarArqs(); // Cargar las arquitecturas
  }

  ngOnInit() {}

  // Método para cargar las arquitecturas desde la API
  cargarArqs() {
    const fecha = moment(this.fecha).format('DD-MM-YY');
    
    this.apiService.getArqs().subscribe(data => {
      this.arqs = data || []; // Si no hay datos, inicializamos como array vacío
      
      // Buscar la entrada actual
      const arqExistente = this.arqs.find(elemento => elemento.fecha === fecha);

      if (arqExistente) {
        this.arqActual = arqExistente; // Asignamos la arquitectura existente
      } else {
        this.inicializarNuevoArq(); // Crear una nueva arquitectura si no existe
      }
    });
  }

  // Método para inicializar una nueva arquitectura
  inicializarNuevoArq() {
    const fecha = moment(this.fecha).format('DD-MM-YY');
    const dia = moment(this.fecha).format('DD');
    const mes = moment(this.fecha).format('MMMM');
    const year = moment(this.fecha).format('YYYY');

    this.arqActual = {
      fechaTexto: `${dia} de ${mes} del ${year}`, // Fecha formateada
      fecha: fecha, // Fecha corta
      texto: '' // Texto vacío inicialmente
    };
  }

  // Método para guardar la arquitectura actual
  async guardar() {
    if (!this.arqActual) return; // Si no hay arquitectura actual, no hacemos nada

    const fecha = moment(this.fecha).format('DD-MM-YY');
    const arqExistente = this.arqs.find(elemento => elemento.fecha === fecha);

    if (arqExistente) {
      // Actualizar la arquitectura existente en la API
      this.apiService.postArq(this.arqActual).subscribe();
    } else {
      // Guardar una nueva arquitectura
      this.guardarItem(this.arqActual);
    }

    // Mostrar mensaje de confirmación
    const toast = await this.toastController.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();
  }

  // Método para agregar una nueva arquitectura al array y a la API
  guardarItem(arq: { fecha: string, fechaTexto: string, texto: string }) {
    this.arqs.push(arq); // Añadimos la nueva arquitectura al array local
    this.apiService.postArq(arq).subscribe(); // Guardamos la arquitectura en la API
  }

}
