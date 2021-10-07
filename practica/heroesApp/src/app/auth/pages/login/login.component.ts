import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Usuario, UsuarioDTO} from "../../interfaces/Usuario";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private authService:AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      user: [
        null,
        [
          Validators.required
        ]
      ],
      password: [
        null,
        [
          Validators.required]
      ]
    })
  }

  ngOnInit(): void {
    console.log("Entre al login");
    this.login()
  }

  login() {
    console.log(this.form.value.user)
    this.authService.login(this.form.value.user).subscribe(usuarios => {
      if (usuarios) {
        usuarios.map(usuario => {
          if (usuario.name === this.form.value.user) {
            if (usuario.password === this.form.value.password) {
              let usuarioDTO:UsuarioDTO = usuario;
              delete usuarioDTO.password
              localStorage.setItem('usuario',JSON.stringify(usuarioDTO))
              this.router.navigate(['/heroes'])
            }
          }
        })
      } else {
        //mostras error usuario
      }
    })
  }



}
