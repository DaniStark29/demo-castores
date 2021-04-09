import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CotizadorComponent } from './components/cotizador/cotizador.component';
import { TotalComponent } from './components/total/total.component';

// Angular Material
import { DemoMaterialModule } from './material/material.module';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    CotizadorComponent,
    TotalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Angular Material
    DemoMaterialModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule
  ],
  providers: [ { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
