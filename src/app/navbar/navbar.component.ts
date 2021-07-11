import { UserapicallService } from './../serivce/userapicall.service';
import { UserlogserviceService } from './../serivce/userlogservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userlogservice:UserlogserviceService,public Userapi:UserapicallService) { }

  ngOnInit(): void {
    
   
  }
  logout(){
    this.Userapi.logout().subscribe(()=>    this.userlogservice.logout(),err=>console.log(err))

  }
}
