import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'; 
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage implements OnInit {

  formularioRecuperacion: FormGroup;

  
  constructor(private fb: FormBuilder,
    private router: Router,
    public alertController : AlertController,
    private apiService: ApiService
  ) {
    this.formularioRecuperacion = this.fb.group({
      'usuario': new FormControl ("", Validators.required),
      'contrasennaNueva': new FormControl ("", Validators.required),
      'documento': new FormControl ("", Validators.required)

    });
  }
  ngOnInit(){
    
  }


  async recuperar() {
    var f = this.formularioRecuperacion.value;
    f.contrasennaNueva = btoa(f.contrasennaNueva);  // Codificar la nueva contraseña en Base64
  
    this.apiService.recuperar(f.usuario, f.documento).subscribe(async (user) => {
      if (user) {
        // Si el usuario existe, actualizamos su contraseña
        this.apiService.actualizarContrasenna(user.id, f.contrasennaNueva).subscribe(async () => {
          // Mostrar mensaje de éxito con AlertController
          const alert = await this.alertController.create({
            header: 'Éxito',
            message: 'Contraseña actualizada exitosamente.',
            buttons: ['OK']
          });
          await alert.present();
        });
      } else {
        // Mostrar mensaje de error si no se encuentra el usuario
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Usuario no encontrado.',
          buttons: ['OK']
        });
        await alert.present();
      }
    });
  }
  
  
}
