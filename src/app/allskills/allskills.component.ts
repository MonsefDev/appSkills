import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';

import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { Skills } from '../skills';
@Component({
  selector: 'app-allskills',
  templateUrl: './allskills.component.html',
  styleUrls: ['./allskills.component.css']
})
export class AllskillsComponent implements OnInit {

  skill=new Skills();
  itemList:AngularFireList<any>;
  itemarray=[];
  constructor(private db:AngularFireDatabase) {
    this.itemList=db.list('skill');
    this.itemList.snapshotChanges().subscribe(
      actions=>{
         actions.forEach(action=>{
           let y= action.payload.toJSON()
           y['$key']=action.key;
          this.itemarray.push(y);
           
         })
      })
      console.log(this.itemarray);
    }
    onUpdate($key){
      this.itemarray.forEach(element => {
        if(element['$key']==$key){
         console.log(element['$key']);
         this.skill.name=element['name'];
         this.skill.number=element['number'];
         this.skill.email=element['email'];
         this.skill.myskill=element['myskill'];
         this.skill.price=element['price'];
        }
      });
   }

   onEdit($key){
        this.skill.name;
        this.skill.number;
        this.skill.email;
        this.skill.myskill;
        this.skill.price ;
    
     // console.log('new '+this.skill.name+' '+this.skill.number+' '+this.skill.email+' '+this.skill.price);
      this.itemList.set($key,{
       name: this.skill.name,
       number: this.skill.number,
       email: this.skill.email,
       myskill:this.skill.myskill,
       price: this.skill.price
      });
 
    
   }
   onDelete($key){
    console.log('delete');
  }

  ngOnInit() {
  }

}
