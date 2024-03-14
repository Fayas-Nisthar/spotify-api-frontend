import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent{

  constructor(private route:Router,private service:ServicesService){
  }
  loginForm= new FormGroup({
  email:new FormControl("",Validators.required),
  password:new FormControl("",Validators.required)
  })
  login(){
    let data=this.loginForm.value
    this.service.signIn(data).subscribe((data:any)=>{
      if (data && data.message === 'Login successful'){
        this.route.navigateByUrl("/spotify")
      }
      else{

      }
    })
  }
}
