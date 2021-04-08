import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) { }

  getciudadescotizador() {

    const url = 'http://localhost:8000/api/origen';
    return this.http.get( url );
    
  }

  getdestinos() {

    const url = 'http://localhost:8000/api/destinos';
    return this.http.get( url );
    
  }

  getempaques() {

    const url = 'http://localhost:8000/api/empaques';
    return this.http.get( url );
    
  }

  calcula(idorigen: any) {

    const url = `http://localhost:8000/api/calcular/${idorigen}`;
    return this.http.get( url );
    
  }

}
