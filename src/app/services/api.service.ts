import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) { }

  getciudadescotizador() {

    const url = 'https://clientes.castores.com.mx/WSPortal/app/services/getciudadescotizador';
    return this.http.get( url );

  }

  getdestinos() {

    const url = 'https://clientes.castores.com.mx/WSPortal/app/services/getdestinos';
    return this.http.get( url );

  }

  getempaques() {

    const url = 'https://clientes.castores.com.mx/WSPortal/app/services/getempaques';
    return this.http.get( url );

  }

  calcula(idorigen: any) {

    const url = `http://localhost:8000/api/calcular/${idorigen}`;
    return this.http.get( url );

  }

}
