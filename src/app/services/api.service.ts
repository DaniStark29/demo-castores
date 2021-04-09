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

calcula(data: any) {
    
    const url = `http://localhost:8000/api/calcular/${data.idorigen}/${data.iddestino}/${data.valordeclarado}/${data.valor}/${data.prodquimico}/${data.idmoneda}/${data.ocurre}/${data.otros}/${data.recoleccion}/${data.idconvenio}/${data.completo}/${data.idtipounidad}/${data.mensajeria}/${data.idsucursal}/${data.blnCodigo}/${data.porcCodigo}/${data.admonocurre}/${data.tcliente}/${data.cantidad}/${data.idempaque}/${data.contiene}/${data.peso}/${data.mts3}/${data.etiquetas}/${data.pesoe}/${data.pesot}/${data.preciou}/${data.largo}/${data.ancho}/${data.alto}/${data.id}`;
    return this.http.get( url );
    
  }

}
