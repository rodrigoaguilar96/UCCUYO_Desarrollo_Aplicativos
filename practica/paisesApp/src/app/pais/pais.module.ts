import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import {FormsModule} from "@angular/forms";
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import {RouterModule} from "@angular/router";
import { PaisInputComponent } from './components/pais-input/pais-input.component';



@NgModule({
  declarations: [
    PorPaisComponent,
    PorRegionComponent,
    PorCapitalComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
