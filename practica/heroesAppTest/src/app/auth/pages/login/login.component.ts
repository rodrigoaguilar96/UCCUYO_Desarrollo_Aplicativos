import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  public usuario : any;
  public form: FormGroup;

  constructor( private formBuilder: FormBuilder,private router: Router, private authService: AuthService) {
    this.usuario = JSON.parse(<string>localStorage.getItem('usuario'));
    this.form = this.formBuilder.group({
      user: [
        this.usuario?.user,
        [
          Validators.required
        ]
      ],
      password: [
        this.usuario?.password,
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    })
  }

  ngOnInit(): void {
  }
  get user(){
    return this.form.get('user');
  }

  get password(){
    return this.form.get('password');
  }
  login() {
    this.authService.login("RJA").subscribe(usuarios => {
      console.log(usuarios)
      if (usuarios) {
        localStorage.setItem('usuario',JSON.stringify(usuarios[0]))
        this.router.navigate(['./heroes'])
      }
    })
  }
}
