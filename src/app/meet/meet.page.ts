import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'; // Importa el servicio de API

@Component({
  selector: 'app-meet',
  templateUrl: './meet.page.html',
  styleUrls: ['./meet.page.scss'],
})
export class MeetPage implements OnInit {

  textoActual: string = ''; // Variable para almacenar el texto actual

  constructor(private apiService: ApiService) {} // Inyecta el ApiService

  ngOnInit() {
    this.cargarTexto(); // Cargar el texto al inicializar la página
  }

  // Método para obtener el texto desde la API
  cargarTexto() {
    this.apiService.obtenerMeetInfo().subscribe((data: any[]) => {
      this.textoActual = data.length ? data[0].texto : 'No hay texto disponible'; // Asigna el texto si existe
    });
  }
}



