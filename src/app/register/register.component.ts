import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fire:AngularFireAuth,private router:Router) { }
  email:string;
  password:string;

  ngOnInit() {
  }

  onRegister(){
    this.fire.auth.createUserWithEmailAndPassword(this.email,this.password)
    .then(user=>{
      console.log(this.email,this.password);
      this.router.navigate(['home']);

    }).catch(
      err=>{
        console.error(err);
      }
      
    )

  }
}
