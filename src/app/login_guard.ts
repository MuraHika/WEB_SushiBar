import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { User } from './user_info';
import { MainComponent } from './main/main.component';

export class loginGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        console.log("====================");
        var token = this.getCookie("token") 
        console.log("TOKEN ИЩЕТСЯ");
        console.log(this.getCookie("token"));
        if (token != '') {
            return false
        }
        return true
    }

    str: string;
    getCookie(name: string) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) {

            this.str = parts.pop().split(";").shift();
        }
        return this.str
    }
} 