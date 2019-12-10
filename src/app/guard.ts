import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import { User } from './user_info';

 export class AdminGuard implements CanActivate{

     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
        return User.Info.Role == "admin"
    }
} 