import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'; // Asegúrate de tener el servicio de API

@Component({
  selector: 'app-nota',
  templateUrl: './nota.page.html',
  styleUrls: ['./nota.page.scss'],
})
export class NotaPage implements OnInit {
  
  // Propiedades para asignatura y nota
  asignatura: string = '';
  nota: number | null = null; // Inicialmente no hay nota
  
  notas: Array<{ asignatura: string, nota: number }> = []; // Arreglo para almacenar las notas

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.cargarNotas(); // Cargar las notas al inicializar
  }

  // Método para cargar las notas desde la API
  cargarNotas() {
    this.apiService.cargarNota().subscribe(data => {
      this.notas = data || []; // Asignar los datos obtenidos o un array vacío si no hay datos
    });
  }

  // Método para guardar la nota actual en la API
  guardarNota() {
    if (this.asignatura && this.nota !== null) {
      const nuevaNota = { asignatura: this.asignatura, nota: this.nota };
      
      this.apiService.guardarNota(nuevaNota).subscribe(() => {
        // Agregar la nueva nota al array local y limpiar los campos
        this.notas.push(nuevaNota);
        this.asignatura = '';
        this.nota = null;
      });
    }
  }
}
