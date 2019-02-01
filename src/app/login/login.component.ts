import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fire:AngularFireAuth,private router:Router) { }
  email:string;
  password:string;

  ngOnInit() {
  }

  onLogin(){
    this.fire.auth.signInAndRetrieveDataWithEmailAndPassword(this.email,this.password)
    .then(user=>{
      console.log(this.email,this.password);
      localStorage.setItem('islogin','true');
      this.router.navigate(['home']);

    }).catch(
      err=>{
        console.error(err);
      }
      
    )

  }
}
