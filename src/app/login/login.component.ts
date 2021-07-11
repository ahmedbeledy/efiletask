import { UserapicallService } from './../serivce/userapicall.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgControl, Validators } from '@angular/forms';
import { UserlogserviceService } from '../serivce/userlogservice.service';
import { User } from '../data/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private formbulid: FormBuilder, private userser: UserapicallService, private loginser: UserlogserviceService) { }
  form!: FormGroup;
  loginsucessful: boolean = false
  ngOnInit(): void {

    this.form = this.formbulid.group({
      password: ['', [Validators.required, Validators.minLength(4)]],

      email: ['user', [Validators.required]]
    })

  }

  login() {

    let data: User = {
      email: "",
      token: "",
      password: ""

    }
   
    
    data.email = this.form.controls['email'].value
    data.password = this.form.controls['password'].value
    localStorage.setItem("Email", this.form.controls['email'].value)
    
    this.userser.login(data).subscribe((log:any={

      email:"",
      token:""
    }) => {
      
      this.loginser.login(log.email, log.token)
    }
      , () => {

        localStorage.removeItem("user")
        this.form.controls['password'].setValue([])
        this.form.controls['Email'].setValue([])
        this.loginsucessful = true

      }
    )
  }
}


