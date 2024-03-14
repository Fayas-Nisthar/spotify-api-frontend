import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private service:ServicesService,private route:Router){

  }
  signupform= new FormGroup({
    email:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
  })
  register(){
    let data=this.signupform.value
    this.service.signUp(data).subscribe(data=>{
      this.signupform.reset()
      this.route.navigateByUrl("")
    })
    
  }
}
