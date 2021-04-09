import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {MatDialog} from '@angular/material/dialog';
import { TotalComponent } from '../total/total.component';


@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.css']
})
export class CotizadorComponent implements OnInit {
 
  origenes: any;
  destinos: any;
  empaques: any;
  importes: any;
  flete: any;
  seguro: any;
  subtotal: any;
  iva: any;
  total: any;


  origen: string = "";
  destino: string = "";
  valor_d: string = "";

  constructor(private apiS: ApiService,public dialog: MatDialog) { }
  openDialog() {
   this.dialog.open(TotalComponent);
 }

  ngOnInit(): void {

    this.apiS.getciudadescotizador()
        .subscribe( resp => {
          this.origenes=resp;
          console.log('origen');
          console.log(this.origenes);
        });

    this.apiS.getdestinos()
        .subscribe( resp => {
          this.destinos=resp;
          console.log('destinos');
          console.log(this.destinos);

        });

    this.apiS.getempaques()
    .subscribe( resp => {
      this.empaques=resp;
      console.log('empaques');
      console.log(this.empaques);

    });
    
    
  }


  formCotizador() {

    const data = {
      "idorigen": this.origen,
      "iddestino": this.destino,
      "valordeclarado":this.valor_d,
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
    .subscribe( (resp: any) => {

      this.importes = resp.listadoimportes;
      this.flete = this.importes[0].cantidad;
      this.seguro = this.importes[1].cantidad;
      this.subtotal = this.importes[22].cantidad;
      this.iva = this.importes[23].cantidad;
      this.total = this.importes[26].cantidad;
      
      console.log(this.importes);

    });

  }



}
