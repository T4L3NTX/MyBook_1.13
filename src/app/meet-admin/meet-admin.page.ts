import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-meet-admin',
  templateUrl: './meet-admin.page.html',
  styleUrls: ['./meet-admin.page.scss'],
})
export class MeetAdminPage implements OnInit {

  // Propiedades para asignatura y nota
  tema: string = '';
  descripcion: string = '';
  
  meet: Array<{ tema: string, descripcion: string }> = []; // Arreglo para almacenar las notas

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.cargarTexto();
  }

  // Método para cargar el texto desde la API
  cargarTexto() {
    this.apiService.cargarMeet().subscribe(data => {
      this.meet = data || []; // Asignar los datos obtenidos o un array vacío si no hay datos
    });
  }

  // Método para guardar el texto actual usando la API
  guardarTexto() {
    if (this.tema && this.descripcion) {
      const nuevoMeet = { tema: this.tema, descripcion: this.descripcion };
      
      this.apiService.guardarMeet(nuevoMeet).subscribe(() => {
        // Agregar la nueva nota al array local y limpiar los campos
        this.meet.push(nuevoMeet);
        this.tema = '';
        this.descripcion = '';
      });
    }
  }
}