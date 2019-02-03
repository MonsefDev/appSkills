import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { Skills } from '../skills';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-myskill',
  templateUrl: './myskill.component.html',
  styleUrls: ['./myskill.component.css']
})
export class MyskillComponent implements OnInit {

  skill=new Skills();
 
  itemList:any=[];
  itemarray=[];
  constructor(private db:AngularFireDatabase,private toastr: ToastrService,private router:Router) {
   this.itemList=db.list('skill');
   this.itemList.snapshotChanges().subscribe(
     actions=>{
       if(actions)
      this.itemarray=actions.map(item=> Object.assign(item.payload.toJSON(),{$key:item.key}))

       /* actions.forEach(action=>{
          let y= action.payload.toJSON()
          y['$key']=action.key;
         this.itemarray.push(y);
         
         
        })
      
     })*/
     
     console.log(this.itemarray);
   })
  }

    onUpdate($key){
      let skill:any = this.itemarray.find(e=>e.$key==$key);
      
        if(skill){
         console.log(skill.$key);
         this.skill.name=skill.name;
         this.skill.number=skill.number;
         this.skill.email=skill.email;
         this.skill.myskill=skill.myskill;
         this.skill.price=skill.price;
        }
      
   }

   onEdit($key){
        this.skill.name;
        this.skill.number;
        this.skill.email;
        this.skill.myskill;
        this.skill.price ;
    

       /// this.itemList.set($key,this.skill);
   console.log('key'+$key+'new '+this.skill.name+' '+this.skill.number+' '+this.skill.email+' '+this.skill.price);
   this.itemList.set($key,{
     
       name: this.skill.name,
       number: this.skill.number,
       email: this.skill.email,
       myskill:this.skill.myskill,
       price: this.skill.price
      }); 
      console.log("-LXdTMCOWmaHMupZFF2h");
      console.log($key);

      this.toastr.success('SKill Edited with successfully','Skill.');
        let a=document.getElementsByClassName('modal-backdrop fade in');
        a[0].classList.remove("modal-backdrop");    

     /* this.itemList.push({
        name: this.skill.name,
        number: this.skill.number,
        email: this.skill.email,
        myskill:this.skill.myskill,
        price: this.skill.price
       })*/
    }


 
   onDelete($key){
   this.itemList.remove($key);
   this.itemarray=[];
   this.toastr.error('SKill Deleted with successfully','Skill.')

  }
  ngOnInit() {
  }

}

