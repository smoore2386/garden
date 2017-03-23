import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule, BaseRequestOptions } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';


import { MockBackend, MockConnection } from '@angular/http/testing';

import { HomeComponent } from './home/home.component';
import { FramerComponent } from './framer/framer.component';
import { GardenStatsComponent } from './garden-stats/garden-stats.component';
import { AddPlantsComponent } from './add-plants/add-plants.component';
import { mockServerProvider } from './mock-server/index';
import { PlantsService } from './add-plants/plants.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FramerComponent,
    GardenStatsComponent,
    AddPlantsComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [PlantsService, mockServerProvider,
      MockBackend,
    BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
