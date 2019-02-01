import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddskilComponent } from './addskil/addskil.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyskillComponent } from './myskill/myskill.component';
import { AllskillsComponent } from './allskills/allskills.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'addskill',
    component:AddskilComponent
  }
  ,
  {
    path:'login',
    component:LoginComponent
  }
  ,
  {
    path:'register',
    component:RegisterComponent
  }
  ,
  {
    path:'myskill',
    component:MyskillComponent
  }
  ,
  {
    path:'allskills',
    component:AllskillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
