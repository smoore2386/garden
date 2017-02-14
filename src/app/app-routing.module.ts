import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';

  export const appRoutes: Routes = [
  {
    path: '',
    component: TestComponent,
    data:{
      title: "SomeTitle"
    }
  },
  {
    path:'home',
    component:HomeComponent,
    children:[
    ],
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
