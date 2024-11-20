import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public alertController: AlertController,
    private apiService: ApiService
  ) {
    this.formularioRegistro = this.fb.group({
      'usuario': new FormControl('', Validators.required),
      'contrasenna': new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      'rut': new FormControl('', [
        Validators.required,
        Validators.minLength(9)
      ]),
      'documento': new FormControl('', [
        Validators.required,
        Validators.minLength(9)
      ])
    });
  }

  ngOnInit() {
  }

  async guardar() {
    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        message: 'Favor de llenar todos los campos correctamente.',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    const f = this.formularioRegistro.value;
    console.log('Guardar');
    f.contrasenna = btoa(f.contrasenna);  

    const user = {
      id: Date.now(), // Genera un ID único
      username: f.usuario,
      pass: f.contrasenna,
      rut: f.rut, 
      nroDocumento: f.documento 
    };

    
  
    this.apiService.registrar(user).subscribe(
      async response => {
        console.log('Usuario registrado', response);
        await this.router.navigate(['/login']);
      },
      async error => {
        const alert = await this.alertController.create({
          message: 'Error al registrar el usuario. Intenta nuevamente.',
          buttons: ['Aceptar']
        });
        await alert.present();
        console.error('Error al registrar usuario', error);
      }
    );
  }
}

