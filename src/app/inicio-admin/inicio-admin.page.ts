import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.page.html',
  styleUrls: ['./inicio-admin.page.scss'],
})
export class InicioAdminPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  volverHome() {
    this.router.navigate(['/login']).then(() => {
      window.location.reload(); 
    });

    localStorage.removeItem('ingresado');
  }


}
