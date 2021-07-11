import { Injectable } from '@angular/core';
import { HttpoperationService } from './httpoperation.service';

@Injectable({
  providedIn: 'root'
})
export class UserapicallService {

  constructor(private operationService:HttpoperationService) { }
   
  

   login(user:any){
    console.log(user);

        return this.operationService.post("users/login",   {
          "email" : user.email ,
          "password" : user.password 
        })
           
    }
  logout(){
    
    return this.operationService.post("users/logout","")
               
                   }
  logoutall(){
  return this.operationService.post("users/logoutAll","")
                     
  }
  
            
}
