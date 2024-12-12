import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrlAdmin = 'https://7f2ce03f-aa1f-4d70-a253-7f4aad09527c-00-3rtmjny4m1nkb.kirk.replit.dev/consejero';
  private apiUrl = 'https://7f2ce03f-aa1f-4d70-a253-7f4aad09527c-00-3rtmjny4m1nkb.kirk.replit.dev/user';  
  private apiUrlArq = 'https://7f2ce03f-aa1f-4d70-a253-7f4aad09527c-00-3rtmjny4m1nkb.kirk.replit.dev/arqs';
  private apiUrlCalidad = 'https://7f2ce03f-aa1f-4d70-a253-7f4aad09527c-00-3rtmjny4m1nkb.kirk.replit.dev/cali'; 
  private apiUrlEst = 'https://7f2ce03f-aa1f-4d70-a253-7f4aad09527c-00-3rtmjny4m1nkb.kirk.replit.dev/Est';
  private apiUrlEti = 'https://7f2ce03f-aa1f-4d70-a253-7f4aad09527c-00-3rtmjny4m1nkb.kirk.replit.dev/Eti';
  private apiUrlIng = 'https://7f2ce03f-aa1f-4d70-a253-7f4aad09527c-00-3rtmjny4m1nkb.kirk.replit.dev/Ing';
  private apiUrlPort = 'https://7f2ce03f-aa1f-4d70-a253-7f4aad09527c-00-3rtmjny4m1nkb.kirk.replit.dev/Port';
  private apiUrlMovil = 'https://7f2ce03f-aa1f-4d70-a253-7f4aad09527c-00-3rtmjny4m1nkb.kirk.replit.dev/Movil';

  private apiUrlArqAd = 'https://7f2ce03f-aa1f-4d70-a253-7f4aad09527c-00-3rtmjny4m1nkb.kirk.replit.dev/arqsAd';
  private apiUrlCalidadAd = 'https://7f2ce03f-aa1f-4d70-a253-7f4aad09527c-00-3rtmjny4m1nkb.kirk.replit.dev/caliAd'; 
  private apiUrlEstAd = 'https://7f2ce03f-aa1f-4d70-a253-7f4aad09527c-00-3rtmjny4m1nkb.kirk.replit.dev/EstAd';
  private apiUrlEtiAd = 'https://7f2ce03f-aa1f-4d70-a253-7f4aad09527c-00-3rtmjny4m1nkb.kirk.replit.dev/EtiAd';
  private apiUrlIngAd = 'https://7f2ce03f-aa1f-4d70-a253-7f4aad09527c-00-3rtmjny4m1nkb.kirk.replit.dev/IngAd';
  private apiUrlPortAd = 'https://7f2ce03f-aa1f-4d70-a253-7f4aad09527c-00-3rtmjny4m1nkb.kirk.replit.dev/PortAd';
  private apiUrlMovilAd = 'https://7f2ce03f-aa1f-4d70-a253-7f4aad09527c-00-3rtmjny4m1nkb.kirk.replit.dev/MovilAd';

  private apiUrlMeet = 'https://7f2ce03f-aa1f-4d70-a253-7f4aad09527c-00-3rtmjny4m1nkb.kirk.replit.dev/Meet';
  private apiUrlNotas = 'https://7f2ce03f-aa1f-4d70-a253-7f4aad09527c-00-3rtmjny4m1nkb.kirk.replit.dev/Notas';

  httpOptions = {
    headers: new HttpHeaders({ 
      "Content-Type": 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

//Usuarios....................................................................

  registrar(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, { headers: this.httpOptions.headers });
  }
  
  iniciar(username: string, passwordBase64: string): Observable<any> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.httpOptions.headers }).pipe(
      map(users => {
        const user = users.find(u => u.username === username && u.pass === passwordBase64);
        return user ? user : null;
      })
    );
  }

  iniciarAdmin(username: string, passwordBase64: string): Observable<any> {
    return this.http.get<any[]>(this.apiUrlAdmin, { headers: this.httpOptions.headers }).pipe(
      map(consejero => {
        const admin = consejero.find(u => u.username === username && u.pass === passwordBase64);
        return admin ? admin : null;
      })
    );
  }

  recuperar(username: string, nroDocumento: string): Observable<any> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.httpOptions.headers }).pipe(
      map(users => {
        const user = users.find(u => u.username === username && u.nroDocumento === nroDocumento);
        return user ? user : null;
      })
    );
  }

  actualizarContrasenna(id:number, nuevaContrasenna: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.patch(url, { pass: nuevaContrasenna }, { headers: this.httpOptions.headers });
  }

//cuadernos...................................................................
  
  guardarArq(data: any): Observable<any> {
    return this.http.post(this.apiUrlArq, data, { headers: this.httpOptions.headers });
  }
  obtenerArqs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlArq, { headers: this.httpOptions.headers });
  }

  // Calidades Software
  guardarCalidad(data: any): Observable<any> {
    return this.http.post(this.apiUrlCalidad, data, { headers: this.httpOptions.headers });
  }
  obtenerCalidad(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlCalidad, { headers: this.httpOptions.headers });
  }

  // Estadísticas
  guardarEstc(data: any): Observable<any> {
    return this.http.post(this.apiUrlEst, data, { headers: this.httpOptions.headers });
  }
  obtenerEstc(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlEst, { headers: this.httpOptions.headers });
  }

  // Ética
  guardarEtic(data: any): Observable<any> {
    return this.http.post(this.apiUrlEti, data, { headers: this.httpOptions.headers });
  }
  obtenerEtic(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlEti, { headers: this.httpOptions.headers });
  }

  // Inglés
  guardarIngl(data: any): Observable<any> {
    return this.http.post(this.apiUrlIng, data, { headers: this.httpOptions.headers });
  }

  obtenerIngl(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlIng, { headers: this.httpOptions.headers });
  }

  // Portafolio
  guardarPortafolio(data: any): Observable<any> {
    return this.http.post(this.apiUrlPort, data, { headers: this.httpOptions.headers });
  }
  obtenerPortafolio(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlPort, { headers: this.httpOptions.headers });
  }

  // Movil
  guardarMovil(data: any): Observable<any> {
    return this.http.post(this.apiUrlMovil, data, { headers: this.httpOptions.headers });
  }

  obtenerMovil(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlMovil, { headers: this.httpOptions.headers });
  }

//Arquitectura (Admin)-------------------------------------

  postArq(data: any): Observable<any> {
    return this.http.post(this.apiUrlArqAd, data, { headers: this.httpOptions.headers });
  }
  getArqs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlArqAd, { headers: this.httpOptions.headers });
  }

  // Calidades Software (Admin)
  postCalidad(data: any): Observable<any> {
    return this.http.post(this.apiUrlCalidadAd, data, { headers: this.httpOptions.headers });
  }
  getCalidad(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlCalidadAd, { headers: this.httpOptions.headers });
  }

  // Estadísticas (Admin)
  postEstc(data: any): Observable<any> {
    return this.http.post(this.apiUrlEstAd, data, { headers: this.httpOptions.headers });
  }
  getEstc(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlEstAd, { headers: this.httpOptions.headers });
  }

  // Ética (Admin)
  postEtic(data: any): Observable<any> {
    return this.http.post(this.apiUrlEtiAd, data, { headers: this.httpOptions.headers });
  }
  getEtic(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlEtiAd, { headers: this.httpOptions.headers });
  }

  // Inglés (Admin)
  postIngl(data: any): Observable<any> {
    return this.http.post(this.apiUrlIngAd, data, { headers: this.httpOptions.headers });
  }

  getrIngl(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlIngAd, { headers: this.httpOptions.headers });
  }

  // Portafolio (Admin)
  postPortafolio(data: any): Observable<any> {
    return this.http.post(this.apiUrlPortAd, data, { headers: this.httpOptions.headers });
  }

  getPortafolio(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlPortAd, { headers: this.httpOptions.headers });
  }

  // Movil (Admin)
  postMovil(data: any): Observable<any> {
    return this.http.post(this.apiUrlMovilAd, data, { headers: this.httpOptions.headers });
  }

  getMovil(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlMovilAd, { headers: this.httpOptions.headers });
  }

//Meet
cargarMeet(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrlMeet, { headers: this.httpOptions.headers });
}
guardarMeet(data: any): Observable<any> {
  return this.http.post(this.apiUrlMeet, data, { headers: this.httpOptions.headers });
}


//Notas
cargarNota(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrlNotas, { headers: this.httpOptions.headers });
}

guardarNota(data: any): Observable<any> {
  return this.http.post(this.apiUrlNotas, data, { headers: this.httpOptions.headers });
}

}