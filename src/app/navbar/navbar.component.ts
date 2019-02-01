import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  user:Observable<firebase.User>;
  private islogin:Boolean=false;
  private email:String;

  constructor(public afAuth:AngularFireAuth,public router:Router){
    this.user=afAuth.authState;

    let status=localStorage.getItem('islogin')
    this.islogin=false;

   /* firebase.auth().onAuthStateChanged(function(user){
      if(user)
      {
        this.islogin=true;
      }
      else
      {
        this.islogin=false;
      }
    })
    this.router.navigate(['/login']);*/
  }

  logout(){
    this.afAuth.auth.signOut();
    this.islogin=false;
    this.router.navigate(['/login']);
  }
 

  ngOnInit() {
  }

}
