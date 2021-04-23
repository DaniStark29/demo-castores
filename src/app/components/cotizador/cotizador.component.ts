import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ApiService } from '../../services/api.service';
import {MatDialog} from '@angular/material/dialog';
import { TotalComponent } from '../total/total.component';


@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.css']
})
export class CotizadorComponent implements OnInit {
  @ViewChild('alert', { static: false }) alert: ElementRef;
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
  valor_d: any;

  //valores del body
  peso: any;
  peso_tonelada: any;
  pesot: any;
  largo: any;
  ancho: any;
  alto: any;
  largo_metros: any;
  ancho_metros: any;
  alto_metros: any;
  mts3: any;
  piezas: any;
  pesoe: any;
  preciou: any;
  contenido: any;
  empaque: any;
  alertPieza=0;
  alertVD=0;
  constructor(private apiS: ApiService,public dialog: MatDialog) { 
    
  }
  openDialog() {
   this.dialog.open(TotalComponent);
 }

 closeAlert() {
  this.alert.nativeElement.classList.remove('show');
  this.alertPieza=0;
  this.alertVD=0;
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
    //Validacion de variables recibidas
    this.peso_tonelada=this.peso/1000;
    this.pesot=this.peso/1000;
    console.log("piezas empaque",this.piezas, this.empaque);
    this.largo_metros= this.largo/100;
    this.ancho_metros= this.ancho/100;
    this.alto_metros= this.alto/100;
    const mts3_primero=this.alto_metros*this.ancho_metros*this.largo_metros;
    this.mts3=mts3_primero*this.piezas;
    console.log("mts3",this.mts3);
    const pesoe_primero=this.mts3*500;
    this.pesoe=pesoe_primero/1000;
    this.preciou=0;
  //validacion piezas
  if(this.piezas > 1 || this.piezas == '' || this.piezas == undefined){
      //alert("Se debe cotizar solo 1 pieza");
      this.alertPieza=1;
      
  }
  //validacion valor declarado
   else if(this.valor_d < 1000 || this.valor_d == '' || this.valor_d == undefined){
    this.alertVD=1;
     //alert("El valor declarado debe ser igual o mayor a $1000");
   }
   //validar valor declarado si es correcto ejecutar funcion
   else{
    const data = {
      "idorigen": this.origen,
      "iddestino": this.destino,
      "valordeclarado":this.valor_d,
      "valor":16,
      "prodquimico":0,
      "idmoneda":1,//
      "ocurre":false,
      "otros":0,
      "recoleccion":0,
      "idconvenio":0,//
      "completo":0,
      "idtipounidad":1,
      "mensajeria":1,
      "idsucursal":1101,//
      "blnCodigo":false,
      "porcCodigo":0,
      "admonocurre":0,
      "tcliente":0,
      "cantidad": this.piezas,
      "idempaque": this.empaque,
      "contiene": this.contenido,
      "peso": '2',
      "mts3": '2',
      "etiquetas": "1",
      "pesoe": '2',
      "pesot": '2',
      "preciou": this.preciou,
      "largo": '2',
      "ancho": '2',
      "alto": '2',
      "id": 0
    };

    this.apiS.calcula(data)
    .subscribe( (resp: any) => {
      console.log("respueta", resp);
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



}
