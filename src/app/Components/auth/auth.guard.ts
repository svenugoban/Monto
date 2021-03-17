import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../Service/login.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private router :Router, private jwtservice : LoginService){}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if(localStorage.getItem('userToken') != null){
        let roles = next.data['permittedRoles'] as Array<string>
        if(roles){
            if(this.jwtservice.roleMatch(roles)){
            return true;
            }
            else{
              this.router.navigate(['forbidden'])
              return false;
            }
          }
        return true;
      }
      else{
      this.router.navigate(['login']);
      alert("First you must login");
      return false;
      }
      
  }

  
}
