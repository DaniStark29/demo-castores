import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.css']
})
export class CotizadorComponent implements OnInit {

  constructor(private apiS: ApiService) { }

  ngOnInit(): void {

    this.apiS.getciudadescotizador()
        .subscribe( resp => {

          console.log(resp);

        });

    this.apiS.getdestinos()
        .subscribe( resp => {

          console.log(resp);

        });
    
    this.apiS.getempaques().subscribe( resp => {

      console.log(resp);

    });
    
    this.formCotizador();
    
  }

  formCotizador() {
  
    const data = {
      "valordeclarado":1000,
      "valor":16,
      "prodquimico":0,
      "idmoneda":1,
      "ocurre":false,
      "otros":0,
      "recoleccion":0,
      "idconvenio":0,
      "completo":0,
      "idtipounidad":1,
      "mensajeria":1,
      "idsucursal":1101,
      "blnCodigo":false,
      "porcCodigo":0,
      "admonocurre":0,
      "tcliente":0,
      "cantidad": "1",
      "idempaque": "1001",
      "contiene": "Bolsas",
      "peso": "00010",
      "mts3": "00040",
      "etiquetas": "1",
      "pesoe": "00011",
      "pesot": "00010",
      "preciou": "600",
      "largo": "01500",
      "ancho": "01500",
      "alto": "01000",
      "id": 0
    };
          
    this.apiS.calcula(data)
    .subscribe( resp => {

      console.log(resp);

    });

  }

}
