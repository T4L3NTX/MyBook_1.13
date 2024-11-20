import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { ApiService } from '../services/api.service'; // Servicio de API

@Component({
  selector: 'app-admin-programacion-movil',
  templateUrl: './admin-programacion-movil.page.html',
  styleUrls: ['./admin-programacion-movil.page.scss'],
})
export class AdminProgramacionMovilPage implements OnInit {

  fecha: string; // Fecha actual
  moviles: Array<{ fecha: string, fechaTexto: string, texto: string }> = []; // Lista de móviles
  movilActual: { fecha: string, fechaTexto: string, texto: string } | null = null; // Móvil actual

  constructor(
    public toastController: ToastController,
    private apiService: ApiService // Inyectamos el servicio ApiService
  ) {
    moment.locale('es-mx');
    this.fecha = moment().format(); // Asigna la fecha actual
    this.cargarMoviles(); // Cargar los móviles
  }

  ngOnInit() {}

  // Método para cargar los móviles desde la API
  cargarMoviles() {
    const fecha = moment(this.fecha).format('DD-MM-YY');
    
    this.apiService.getMovil().subscribe(data => {
      this.moviles = data || []; // Si no hay datos, inicializamos como array vacío
      
      const movilExistente = this.moviles.find(elemento => elemento.fecha === fecha);

      if (movilExistente) {
        this.movilActual = movilExistente; // Asignamos el móvil existente
      } else {
        this.inicializarNuevoMovil(); // Crear un nuevo móvil si no existe
      }
    });
  }

  // Método para inicializar un nuevo móvil
  inicializarNuevoMovil() {
    const fecha = moment(this.fecha).format('DD-MM-YY');
    const dia = moment(this.fecha).format('DD');
    const mes = moment(this.fecha).format('MMMM');
    const year = moment(this.fecha).format('YYYY');

    this.movilActual = {
      fechaTexto: `${dia} de ${mes} del ${year}`,
      fecha: fecha,
      texto: ''
    };
  }

  // Método para guardar el móvil actual
  async guardar() {
    if (!this.movilActual) return;

    const fecha = moment(this.fecha).format('DD-MM-YY');
    const movilExistente = this.moviles.find(elemento => elemento.fecha === fecha);

    if (movilExistente) {
      this.apiService.postMovil(this.movilActual).subscribe();
    } else {
      this.guardarItem(this.movilActual);
    }

    const toast = await this.toastController.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();
  }

  // Método para agregar un nuevo móvil al array y a la API
  guardarItem(movil: { fecha: string, fechaTexto: string, texto: string }) {
    this.moviles.push(movil);
    this.apiService.postMovil(movil).subscribe();
  }


}
