import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { ApiService } from '../services/api.service'; // Servicio de API

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.page.html',
  styleUrls: ['./portafolio.page.scss'],
})
export class PortafolioPage implements OnInit {

  fecha: string; // Fecha actual
  ports: Array<{ fecha: string, fechaTexto: string, texto: string }> = []; // Lista de portafolios
  portActual: { fecha: string, fechaTexto: string, texto: string } | null = null; // Portafolio actual

  constructor(
    public toastController: ToastController,
    private apiService: ApiService // Inyectamos el servicio ApiService
  ) {
    moment.locale('es-mx');
    this.fecha = moment().format(); // Asigna la fecha actual
    this.cargarPorts(); // Cargar los portafolios
  }

  ngOnInit() {}

  // Método para cargar los portafolios desde la API
  cargarPorts() {
    const fecha = moment(this.fecha).format('DD-MM-YY');
    
    this.apiService.obtenerPortafolio().subscribe(data => {
      this.ports = data || []; // Si no hay datos, inicializamos como array vacío
      
      const portExistente = this.ports.find(elemento => elemento.fecha === fecha);

      if (portExistente) {
        this.portActual = portExistente; // Asignamos el portafolio existente
      } else {
        this.inicializarNuevoPort(); // Crear un nuevo portafolio si no existe
      }
    });
  }

  // Método para inicializar un nuevo portafolio
  inicializarNuevoPort() {
    const fecha = moment(this.fecha).format('DD-MM-YY');
    const dia = moment(this.fecha).format('DD');
    const mes = moment(this.fecha).format('MMMM');
    const year = moment(this.fecha).format('YYYY');

    this.portActual = {
      fechaTexto: `${dia} de ${mes} del ${year}`,
      fecha: fecha,
      texto: ''
    };
  }

  // Método para guardar el portafolio actual
  async guardar() {
    if (!this.portActual) return;

    const fecha = moment(this.fecha).format('DD-MM-YY');
    const portExistente = this.ports.find(elemento => elemento.fecha === fecha);

    if (portExistente) {
      this.apiService.guardarPortafolio(this.portActual).subscribe();
    } else {
      this.guardarItem(this.portActual);
    }

    const toast = await this.toastController.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();
  }

  // Método para agregar un nuevo portafolio al array y a la API
  guardarItem(port: { fecha: string, fechaTexto: string, texto: string }) {
    this.ports.push(port);
    this.apiService.guardarPortafolio(port).subscribe();
  }
}

