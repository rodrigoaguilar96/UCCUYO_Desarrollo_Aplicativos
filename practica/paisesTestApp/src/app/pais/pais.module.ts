import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorRegionComponent,
    VerPaisComponent,
    PorPaisComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  exports: [
    PorCapitalComponent,
    PorRegionComponent,
    VerPaisComponent,
    PorPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
