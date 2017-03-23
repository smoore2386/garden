import { Component, OnInit, Input } from '@angular/core';
import { Routes, Route } from '@angular/router';
import { MenuItem } from './nav-menu/menu-item'
import { appRoutes } from '../../app-routing.module'

import * as _ from "lodash";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

/** Base Navigation Component Class. */
export class NavComponent implements OnInit{

  private menuItems: MenuItem[];
  /**
  * Sets the base set of MenuItems recursively creates more from children
  */
  constructor(){

  }
  /**
  * Returns MenuItem from Angular Route
  * @param {Route} angular2 route.
  * @return {MenuItem} MenuItem interpretation of route.
  */
  routeToMenuItem(route:Route):MenuItem{

        if(route.redirectTo == null){
            console.log(route);
            return new MenuItem(route.path, String(_.get(route.data,"title")),
                route.children,0,route.data)
        }
  }

  ngOnInit() {
        this.menuItems = _.pull(_.map(appRoutes,this.routeToMenuItem), undefined);
        console.log(this.menuItems);
  }
}
