import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: []
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  //hablar de formularios reactivos. Subject
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();

  placeHolder: string = '';
  debouncer: Subject<string> = new Subject<string>();
  termino: string = '';

  constructor() {
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }

  //se dispara una unica vez cuando el componente es inicializado
  ngOnInit(): void {
    this.debouncer
      //esto es para q no sea instantaneo
      .pipe(
        debounceTime(350)
      )
      .subscribe(valor => {
        this.onDebounce.emit(valor)
    })
  }

}
