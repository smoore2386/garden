import { Component, OnInit, Input} from '@angular/core';
import { Routes,Route, DefaultUrlSerializer } from '@angular/router';
import {AppRoutingModule} from '../../../app-routing.module'
import { MenuItem } from './menu-item';

import * as _ from "lodash";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})

export class NavMenuComponent implements OnInit {

  @Input() menuItems : MenuItem[];
  private styleClass = "defaultStyle";
  private collapsed: boolean = true;
  private hasArrow = false;

  constructor() {}

  getStyleClass(){
    return this.styleClass;
  }
  setStyleClass(style:string){
    this.styleClass = style;
    this.menuItems[0].getStyle();
  }
  ngOnInit() {
    this.setStyleClass(this.menuItems[0].getStyle());
  }
}
