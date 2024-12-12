<<<<<<< HEAD
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
=======
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // usuario
  private apiUrl = 'http://localhost:3000/user';  
  private apiUrlArq = 'http://localhost:3000/arqs';
  private apiUrlCalidad = 'http://localhost:3000/cali'; 
  private apiUrlEst = 'http://localhost:3000/Est';
  private apiUrlEti = 'http://localhost:3000/Eti';
  private apiUrlIng = 'http://localhost:3000/Ing';
  private apiUrlPort = 'http://localhost:3000/Port';
  private apiUrlMovil = 'http://localhost:3000/Movil';
  //Admin
  private apiUrlAdmin = 'http://localhost:3000/consejero';
  private apiUrlArqAd = 'http://localhost:3000/arqsAd';
  private apiUrlCalidadAd = 'http://localhost:3000/caliAd'; 
  private apiUrlEstAd = 'http://localhost:3000/EstAd';
  private apiUrlEtiAd = 'http://localhost:3000/EtiAd';
  private apiUrlIngAd = 'http://localhost:3000/IngAd';
  private apiUrlPortAd = 'http://localhost:3000/PortAd';
  private apiUrlMovilAd = 'http://localhost:3000/MovilAd';
  //Otros
  private apiUrlMeet = 'http://localhost:3000/Meet';
  private apiUrlNotas = 'http://localhost:3000/Notas';
  

  constructor(private http: HttpClient) { }



//Usuarios....................................................................

  registrar(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  
  iniciar(username: string, passwordBase64: string): Observable<any> {

    return this.http.get<any[]>(this.apiUrl).pipe(
  
     map(users => {
  
      // Verificamos si el usuario y la contraseña codificada coinciden
  
      const user = users.find(u => u.username === username && u.pass === passwordBase64);
     
      
      return user ? user : null;
   
  
     })
  
    );
  }

  iniciarAdmin(name: string, password: string): Observable<any> {

    return this.http.get<any[]>(this.apiUrlAdmin).pipe(
  
     map(users => {
  
      // Verificamos si el usuario y la contraseña codificada coinciden
  
      const admin = users.find(u => u.name === name && u.password === password);
     
      
      return admin ? admin : null;
   
  
     })
  
    );
  }


  recuperar(username: string, nroDocumento: string ): Observable<any> {

    return this.http.get<any[]>(this.apiUrl).pipe(
  
     map(users => {
  
      // Verificamos si el usuario y la contraseña codificada coinciden
  
      const user = users.find(u => u.username === username && u.nroDocumento === nroDocumento);
      
  
      return user ? user : null;
  
     })
  
    );
  }

  actualizarContrasenna(userId: number, nuevaContrasenna: string): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;  // Usamos el id del usuario para actualizar su registro
    return this.http.patch(url, { pass: nuevaContrasenna });
  }


//cuadernos usuario...................................................................
  
  //Arquitectura-----
   
  guardarArq(data: any): Observable<any> {
    return this.http.post(this.apiUrlArq, data);
  }
  obtenerArqs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlArq);
  }
  //Calidad Software-----

  guardarCalidad(data: any): Observable<any> {
    return this.http.post(this.apiUrlCalidad, data);
  }
  obtenerCalidad(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlCalidad);
  }
  //Estadistica-----

  guardarEstc(data: any): Observable<any> {
    return this.http.post(this.apiUrlEst, data);
  }
  obtenerEstc(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlEst);
  }
  //Etica-----

  guardarEtic(data: any): Observable<any> {
    return this.http.post(this.apiUrlEti, data);
  }
  obtenerEtic(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlEti);
  }
  //Ingles-----

  guardarIngl(data: any): Observable<any> {
    return this.http.post(this.apiUrlIng, data);
  }

  obtenerIngl(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlIng);
  }
 //portafolio-----

 guardarPortafolio(data: any): Observable<any> {
  return this.http.post(this.apiUrlPort, data);
}

obtenerPortafolio(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrlPort);
}
//Movil-----

guardarMovil(data: any): Observable<any> {
  return this.http.post(this.apiUrlMovil, data);
}

obtenerMovil(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrlMovil);
}

//cuadernos Admin...................................................................

 //Arquitectura-----
   
 postArq(data: any): Observable<any> {
  return this.http.post(this.apiUrlArqAd, data);
}
getArqs(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrlArqAd);
}
//Calidad Software-----

postCalidad(data: any): Observable<any> {
  return this.http.post(this.apiUrlCalidadAd, data);
}
getCalidad(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrlCalidadAd);
}
//Estadistica-----

postEstc(data: any): Observable<any> {
  return this.http.post(this.apiUrlEstAd, data);
}
getEstc(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrlEstAd);
}
//Etica-----

postEtic(data: any): Observable<any> {
  return this.http.post(this.apiUrlEtiAd, data);
}
getEtic(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrlEtiAd);
}
//Ingles-----

postIngl(data: any): Observable<any> {
  return this.http.post(this.apiUrlIngAd, data);
}

getrIngl(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrlIngAd);
}
//portafolio-----

postPortafolio(data: any): Observable<any> {
return this.http.post(this.apiUrlPortAd, data);
}

getPortafolio(): Observable<any[]> {
return this.http.get<any[]>(this.apiUrlPortAd);
}
//Movil-----

postMovil(data: any): Observable<any> {
return this.http.post(this.apiUrlMovilAd, data);
}

getMovil(): Observable<any[]> {
return this.http.get<any[]>(this.apiUrlMovilAd);
}


//otros...................................................................

//Meet
guardarMuroInfo(data:any):Observable<any>{
  return this.http.post(this.apiUrlMeet,data)
}

obtenerMeetInfo(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrlMeet);

}
//Notas

cargarNota(): Observable<any[]>{
  return this.http.get<any[]>(this.apiUrlNotas);
}
guardarNota(data:any):Observable<any>{
  return this.http.post(this.apiUrlNotas,data)
}

  
  
  

   }





  //iniciar(username: string, passwordBase64: string): Observable<any> {
    //const params = new HttpParams()
      //.set('username', username)
      //.set('pass', passwordBase64);  // Asegúrate de que los campos coincidan con los del JSON

    //return this.http.get<any[]>(this.apiUrl, { params }).pipe(
      //retry(3)  // Reintentamos la solicitud en caso de fallo
    //);
  //}
  
  



>>>>>>> c41f6c3bf85e0a60726b458f92cdc574941fdd55
