import { Component, OnInit } from '@angular/core';
import {Pais} from "../../interfaces/pais.interface";
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  termino:string = '';
  hayError:boolean = false;
  paises: Pais[] = [];

  constructor(private paisesService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino:string) {
    this.hayError = false;
    this.termino = termino;
    this.paisesService.buscarCapital(termino).subscribe(resp => {
      console.log(resp);
      this.paises = resp;
    }, error => {
      console.error("tuve un Error" + error)
      this.hayError = true;
      this.paises = [];
    })
  }
}
