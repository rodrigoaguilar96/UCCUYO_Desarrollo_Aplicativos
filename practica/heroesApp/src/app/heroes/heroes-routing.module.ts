import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AgregarComponent} from "./pages/agregar/agregar.component";
import {BuscarComponent} from "./pages/buscar/buscar.component";
import {HeroeComponent} from "./pages/heroe/heroe.component";
import {HomeComponent} from "./pages/home/home.component";
import {LoginGuard} from "../shared/guards/LoginGuard";
import {AdminGuard} from "../shared/guards/AdminGuard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'agregar',
        component: AgregarComponent,
        canActivate: [LoginGuard, AdminGuard]
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: ':id',
        component: HeroeComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    LoginGuard,
    AdminGuard
  ]
})
export class HeroesRoutingModule { }
