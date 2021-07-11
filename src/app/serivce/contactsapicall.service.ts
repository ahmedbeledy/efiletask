import { HttpoperationService } from './httpoperation.service';
import { Injectable } from '@angular/core';
import { contacts } from '../data/contacts';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class contactssapicallService {

  constructor (private operationService:HttpoperationService) { }
  
  
  createcontacts(contacts:contacts){
  
    return this.operationService.post("contacts",contacts)
       
      }
   
  
  getcontactsfilter(page:number,filter:any){
   var temp= JSON.stringify(filter)
   let re = /\,/gi;
  temp= temp.replace(re,"&");
   re = /\:/gi;

  temp= temp.replace(re,"=");
  re = /\"/gi;

  temp= temp.replace(re,"");
  re = /\{/gi;

  temp= temp.replace(re,"");
  re = /\}/gi;

    temp= temp.replace(re,"");
    return this.operationService.get(`contacts?page=${page}&${temp}`)

  }
  
  editcontacts(contacts:contacts,id:string){
    return this.operationService.patch(`contacts/${id}`, contacts)

  }
  deletecontacts(contactsid:string){
    return this.operationService.delete(`contacts/${contactsid}`)

  }
             
         
    
  
         
    
  
  
}

