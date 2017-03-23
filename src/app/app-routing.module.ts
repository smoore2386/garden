import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FramerComponent } from './framer/framer.component';
import { AddPlantsComponent } from './add-plants/add-plants.component';

export const appRoutes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path:'home',
    component:HomeComponent,
    children:[
    ],
    data:{
      title: 'Home'
    }
  },
 

  {
    path: 'garden/add',
    component: AddPlantsComponent,
    data:{
      title: "Add Plant",
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
