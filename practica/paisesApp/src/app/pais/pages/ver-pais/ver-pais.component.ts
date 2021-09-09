import { Component, OnInit } from '@angular/core';
import {Pais} from "../../interfaces/pais.interface";
import {ActivatedRoute} from "@angular/router";
import {PaisService} from "../../services/pais.service";
import {switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!: Pais;

  constructor(private activeRoute: ActivatedRoute,
              private paisService: PaisService) { }

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.getPaisPorAlpha(id)),
        tap(console.log)
      )
      .subscribe(pais => {
        this.pais = pais;
    })
  }



}
