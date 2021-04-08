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
    
    this.apiS.getempaques()
    .subscribe( resp => {

      console.log(resp);

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
