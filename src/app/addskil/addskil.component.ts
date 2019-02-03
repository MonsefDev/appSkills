import { Component, OnInit } from '@angular/core';
import { Skills } from '../skills';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-addskil',
  templateUrl: './addskil.component.html',
  styleUrls: ['./addskil.component.css']
})
export class AddskilComponent implements OnInit {

  skill=new Skills();
 
  itemList:AngularFireList<any>;

  constructor(private db:AngularFireDatabase,public router:Router,private toastr: ToastrService) {
   this.itemList=db.list('skill');
   }

  ngOnInit() 
  {

  }

  insertSkill(){ 
    this.itemList.push(this.skill);
    this.toastr.success('New SKill Added with successfully','EMP. patients')
    this.router.navigate(['/myskill']);
  }

  
}
