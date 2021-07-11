import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, Router } from '@angular/router';
import { UserlogserviceService } from '../serivce/userlogservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgardGuard implements CanActivate {
  constructor(private usersevice:UserlogserviceService,private rotutesser:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if(!this.usersevice.isloged())      
  {
    return false;
  }
   else return true
   
  }
 
}
  

