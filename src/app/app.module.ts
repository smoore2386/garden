import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { HomeComponent } from './home/home.component';
import { FramerComponent } from './framer/framer.component';
import { GardenStatsComponent } from './garden-stats/garden-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FramerComponent,
    GardenStatsComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
