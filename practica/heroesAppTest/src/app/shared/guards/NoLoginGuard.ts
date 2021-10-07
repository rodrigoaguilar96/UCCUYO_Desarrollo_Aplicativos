import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";

@Injectable()

export class NoLoginGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate() {
    if (!localStorage.getItem('usuario')) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
