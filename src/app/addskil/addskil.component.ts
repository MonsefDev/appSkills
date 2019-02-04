import { Component, OnInit } from '@angular/core';
import { Skills } from '../skills';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-addskil',
  templateUrl: './addskil.component.html',
  styleUrls: ['./addskil.component.css']
})
export class AddskilComponent implements OnInit {

  skill=new Skills();
  emaill:string;
  uid:any;
 
  itemList:AngularFireList<any>;

  constructor(private fire:AngularFireAuth,private db:AngularFireDatabase,public router:Router,private toastr: ToastrService) {
   this.itemList=db.list('skill');

   let user=localStorage.getItem('email');
   this.emaill=user;

   console.log("email is : "+user);

   this.uid=localStorage.getItem('uid');
   console.log("uid is : "+this.uid);
   }

  ngOnInit() 
  {
    let user=this.fire.auth.currentUser;
    console.log(user);

    console.log(this.skill.name)
  }

  insertSkill(){ 
    this.itemList.push(this.skill);
    this.toastr.success('New SKill Added with successfully','EMP. patients')
    this.router.navigate(['/myskill']);
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.skill))
  }
  
}
