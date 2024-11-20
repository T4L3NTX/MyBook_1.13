import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; 
import { Router } from '@angular/router';
import { AlertController, AnimationController, IonCard, NavController } from '@ionic/angular';
import { Animation } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('card', { read: ElementRef }) card!: ElementRef;
  formularioLogin: FormGroup;
  private animation!: Animation; 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public alertController: AlertController,
    private animationCtrl: AnimationController,
    public navCtrl:NavController
  ) {
    this.formularioLogin = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'contrasenna': new FormControl("", Validators.required) 
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(2)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
  }



  async ingresar() {
    var f = this.formularioLogin.value;
    var userString = localStorage.getItem('user');
    if (userString !== null) {
      var user = JSON.parse(userString);
      if (user.usuario == f.usuario && user.contrasenna == f.contrasenna
        || (f.usuario == 'ADMIN1' && f.contrasenna == '66691139')) {
        console.log('Ingresado');
        localStorage.setItem('ingresado', 'true');
        this.animation.play();
        setTimeout(() => {
          this.navCtrl.navigateRoot('/inicio');
        }, 1000);
      } else {
        const alert = await this.alertController.create({
          message: 'Datos Incorrectos',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
      if (f.usuario == 'ADMIN1' && f.contrasenna == '66691139') {
        await this.router.navigate(['/inicio-admin']);
      }
    } else {
      // Manejo de caso cuando no se encuentra el valor en localStorage
    }
  }
}
