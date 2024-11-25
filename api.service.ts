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
  
  



