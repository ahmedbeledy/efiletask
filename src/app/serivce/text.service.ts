import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {
TextServ(text:string){
if(text.length==0||text==null)
return true
else
return false

}
  constructor() { }
}
