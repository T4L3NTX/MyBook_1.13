import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }


  volverHome() {

    //basicamente coloqué esta funcion porque no sabia exactamente como parar la animacion
    // Navega a la página "home" y luego recarga la página
    this.router.navigate(['/login']).then(() => {
      window.location.reload(); 
    });

    localStorage.removeItem('ingresado');
  }


}
