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
      id: '12',
      userId: '1',
      title: 'change title',
      completed: true
    };

    this.apiS.calcula(data)
    .subscribe( resp => {

      console.log(resp);

    });

  }

}
