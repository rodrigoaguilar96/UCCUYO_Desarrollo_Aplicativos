import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";

@Injectable()

export class LoginGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate() {
    if (localStorage.getItem('usuario')) {
      this.router.navigate(['/heroes']);
      return false;
    }
    return true;
  }
}
