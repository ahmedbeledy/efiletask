import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HttpoperationService {

  constructor( private Httpuser:HttpClient  )  { }
  get(url:string){
  
    return this.Httpuser.get(`${environment.apiurl}/${url}`,{headers:{'Authorization':`${localStorage.getItem('token')}`}})
       
      }
   post(url:string,usertype:any){
    return this.Httpuser.post(`${environment.apiurl}/${url}`,usertype,{headers:{'Authorization':`${localStorage.getItem('token')}`}})
           
    }
  patch(url:string,usertype:any){
    console.log(usertype)
    return this.Httpuser.patch(`${environment.apiurl}/${url}`,usertype,{headers:{'Authorization':`${localStorage.getItem('token')}`}})
               
                 }
  delete(url:string){

  return this.Httpuser.delete(`${environment.apiurl}/${url}`,{headers:{'Authorization':`${localStorage.getItem('token')}`}})
                     
  }


}


