import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { LoggerService } from './logger.service';
import { throwIfLoaded } from './module-import-guard';

import { AppRoutingModule } from '../app-routing.module'
import { NavComponent } from './nav/nav.component';
import { NavMenuComponent } from './nav/nav-menu/nav-menu.component';


// Core Features of our application defined here 
@NgModule({
  imports: [CommonModule,AppRoutingModule, MaterialModule.forRoot()],
  exports: [NavComponent],
  declarations: [NavComponent,  NavMenuComponent],
  providers: [LoggerService]
})

export class CoreModule { 
    constructor(@Optional() @SkipSelf() parentModule: CoreModule){
        throwIfLoaded(parentModule, 'CoreModule');
    }

}
