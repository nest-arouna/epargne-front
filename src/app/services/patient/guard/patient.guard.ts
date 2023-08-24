import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class patientGuard {
  constructor( public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean 
  {


    let role= localStorage.getItem("role")
    let type=localStorage.getItem("type")    
  
    if (type!=null  && type == environment.TYPE_PATIENT || role !=null && type != null && type == environment.TYPE_PROFESSIONNAL && role == "ADMIN"  ){
      return true
    } else 
    {
      this.router.navigate(['/login']);
      return false;
    }


  }
}