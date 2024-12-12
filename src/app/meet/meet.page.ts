import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'; // Importa el servicio de API

@Component({
  selector: 'app-meet',
  templateUrl: './meet.page.html',
  styleUrls: ['./meet.page.scss'],
})
export class MeetPage implements OnInit {

  meet: Array<{ tema: string, descripcion: string }> = []; // Arreglo para almacenar las notas

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.cargarMeet();
  }

  // Método para cargar el texto desde la API
  cargarMeet() {
    this.apiService.cargarMeet().subscribe(data => {
      this.meet = data || []; // Asignar los datos obtenidos o un array vacío si no hay datos
    });
  }

}



