import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service'; // Verificar que está bien importado

@Component({
  selector: 'app-meet-admin',
  templateUrl: './meet-admin.page.html',
  styleUrls: ['./meet-admin.page.scss'],
})
export class MeetAdminPage implements OnInit {

  textoActual: string = ''; // Variable para almacenar el texto actual

  constructor(
    public toastController: ToastController,
    private apiService: ApiService // Inyectamos el servicio ApiService
  ) {}

  ngOnInit() {
    this.cargarTexto();
  }

  // Método para cargar el texto desde la API
  cargarTexto() {
    this.apiService.obtenerMeetInfo().subscribe((data: any[]) => {
      this.textoActual = data.length ? data[0].texto : ''; // Asignar el texto si existe
    });
  }

  // Método para guardar el texto actual usando la API
  async guardarTexto() {
    const data = { texto: this.textoActual }; // Crear un objeto con el texto

    this.apiService.guardarMuroInfo(data).subscribe(() => {
      this.mostrarMensaje('Texto guardado');
    });
  }

  // Método para mostrar un mensaje de confirmación
  async mostrarMensaje(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
}
