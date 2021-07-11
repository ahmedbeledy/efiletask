import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserlogserviceService {
 
logged=new Subject<boolean>();
  constructor(private routerser:Router,) {
    this.logged.next(this.isloged())
   }
  setlogedstatus(stauts:boolean){

    return this.logged.next(stauts)
  }
  getlogedstatus(){
    return this.logged.asObservable();
  }

login(email:string,token:string){
  localStorage.setItem("Email",email)

this.setlogedstatus(true)
localStorage.setItem("token",token)
this.routerser.navigateByUrl('/filter')

}
logout(){
  localStorage.removeItem("Email")
  localStorage.removeItem("token")
  this.routerser.navigateByUrl('')

  this.setlogedstatus(false)


}
isloged():boolean
{
  let email=localStorage.getItem("Email")
  if(email==null)
    return false
else
    return true
}
gettocken()
{
  if(localStorage.getItem("token")==null)
  return ""
else 
 return localStorage.getItem("token")
}
}

