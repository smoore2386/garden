import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  export const appRoutes: Routes = [
  {
    path: '',
    children: [],
    data:{
      title: "SomeTitle"
    }
  },
  {
    path:'',
    component:AppComponent,
    children:[],
    data:{
      title: 'SomeTitle2'
    }

  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
