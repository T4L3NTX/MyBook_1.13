import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; 
import { Router } from '@angular/router';
import { AlertController, AnimationController, IonCard, NavController } from '@ionic/angular';
import { Animation } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('card', { read: ElementRef }) card!: ElementRef;
  formularioLogin: FormGroup;
  private animation!: Animation; 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public alertController: AlertController,
    private animationCtrl: AnimationController,
    public navCtrl:NavController,
    private apiService: ApiService
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
    
    f.contrasenna = btoa(f.contrasenna);
    
    console.log(f.contrasenna);

    this.apiService.iniciar(f.usuario, f.contrasenna).subscribe(async (user) => {
      if (user) {
        // Si las credenciales son correctas, redirigimos
       
        localStorage.setItem('ingresado','true');
        this.navCtrl.navigateRoot('inicio');
        
      }
    });
      if (f.usuario == "ADMIN" && f.contrasenna == "NjY2OTExMzk=") {
          this.apiService.iniciarAdmin(f.usuario, f.contrasenna).subscribe(async (admin) => {

            if(admin){
              localStorage.setItem('ingresado','true');
              this.navCtrl.navigateRoot('inicio-admin');
            }else {
              // Si las credenciales no son válidas, mostramos alerta
              const alert = await this.alertController.create({
                header: 'Error',
                message: 'Credenciales incorrectas',
                buttons: ['OK']
              });
              await alert.present();
            }

          });
      }else{
        this.apiService.iniciar(f.usuario, f.contrasenna).subscribe(async (user) => {
        if (user) {
          // Si las credenciales son correctas, redirigimos
         
          localStorage.setItem('ingresado','true');
          this.navCtrl.navigateRoot('inicio');
          
        }else {
          // Si las credenciales no son válidas, mostramos alerta
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Credenciales incorrectas',
            buttons: ['OK']
          });
          await alert.present();
        }
      });
      
    }
    
  }
  
}