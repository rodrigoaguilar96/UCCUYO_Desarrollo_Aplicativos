import { Component, OnInit } from '@angular/core';
import {Pais} from "../../interfaces/pais.interface";
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino:string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino).subscribe(resp => {
      console.log(resp);
      this.paises = resp;
    }, error => {
      console.error("tuve un error: " + error);
      this.hayError = true;
      this.paises = [];
    })
  }
}
