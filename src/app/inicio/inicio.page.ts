import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  capturedImage: string | null | undefined = null; // Ajuste del tipo de capturedImage

  constructor(private router: Router) {}

  ngOnInit() {}

  // Función para tomar la foto
  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90, // Calidad de la imagen
        resultType: CameraResultType.DataUrl, // La imagen será una Data URL (base64)
        source: CameraSource.Camera, // Usar la cámara para tomar la foto
      });

      // Verificar si image.dataUrl no es undefined
      if (image.dataUrl) {
        this.capturedImage = image.dataUrl; // Asigna solo si es un valor válido
      }

      console.log('Imagen capturada:', this.capturedImage); // Depuración
    } catch (error) {
      console.error('Error al capturar la foto:', error);
    }
  }

  // Función para cerrar sesión y navegar a la página de login
  volverHome() {
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
    localStorage.removeItem('ingresado');
  }
}