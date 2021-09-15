import { Component, OnInit } from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {Pais} from "../../interfaces/pais.interface";
//https://app.quicktype.io/
@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];
  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisesSugeridos = [];
    this.paisService.buscarPais(termino).subscribe(resp => {
      console.log(resp)
      this.paises = resp;
    },error => {
      console.error("tuve un error: " + error)
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(termino: string ) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino)
      .subscribe(
        paises => this.paisesSugeridos = paises.splice(0,4),
        (error => this.paisesSugeridos = [])
      )
  }
  ngOnInit(): void {
  }
}
