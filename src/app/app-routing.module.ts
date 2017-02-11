import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';

  export const appRoutes: Routes = [
  {
    path: '',
    children: [],
    component: TestComponent,
    data:{
      title: "SomeTitle"
    }
  },
  {
    path:'',
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
