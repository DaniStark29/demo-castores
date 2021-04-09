import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
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
    // return axios.get('http://localhost:8000/api/empaques');
    
  }

calcula(data: any) {
    
    const url = `http://localhost:8000/api/calcular/${data.valordeclarado}/${data.valor}/${data.prodquimico}/${data.idmoneda}/${data.ocurre}/${data.otros}/${data.recoleccion}/${data.idconvenio}/${data.completo}/${data.idtipounidad}/${data.mensajeria}/${data.idsucursal}/${data.blnCodigo}/${data.porcCodigo}/${data.admonocurre}/${data.tcliente}`;
    return this.http.get( url );
    // const datos = {
    //   "cantidad": "1",
    //   "idempaque": "1001",
    //   "contiene": "Bolsas",
    //   "peso": "0.0010",
    //   "mts3": "00040",
    //   "etiquetas": "1",
    //   "pesoe": "00011",
    //   "pesot": "00010",
    //   "preciou": "600",
    //   "largo": "01500",
    //   "ancho": "01500",
    //   "alto": "01000",
    //   "id": 0
    // };

    // return axios.post('http://localhost:8000/api/calcular2', datos);
    
  }

}
