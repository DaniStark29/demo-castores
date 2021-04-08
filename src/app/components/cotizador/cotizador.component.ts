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
    
    const data = {
      id: '12',
      userId: '1',
      title: 'change title',
      completed: true
    };
          
    this.apiS.calculo(data)
    .subscribe( resp => {

      console.log(resp);
      
    });


  }

}
