import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { FramerComponent } from './framer/framer.component';

export const appRoutes: Routes = [
  {
    path: 'framer/:path',
    component: FramerComponent,
    data:{
      title: "SomeTitle",
      framerPath:'myindex.html'
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
