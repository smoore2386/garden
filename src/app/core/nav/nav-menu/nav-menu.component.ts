import { Component, OnInit, Input} from '@angular/core';
import { Routes,Route, DefaultUrlSerializer } from '@angular/router';
import {AppRoutingModule} from '../../../app-routing.module'
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

  constructor() {

  }

  getStyleClass(){
    return this.styleClass;
  }
  setStyleClass(style:string){
    console.log("setting style class");
    this.styleClass = style;
    this.menuItems[0].getStyle();
  }
  ngOnInit() {
    this.setStyleClass(this.menuItems[0].getStyle());
  }
}
export class MenuItem{
 
  public route: string;
  public name: string;
  private children: Routes;
  private data: any; 
  private hasChildren:boolean;
  public collapsed = false;
  private urlSerializer: DefaultUrlSerializer;
  private style = "defaultStyle";
  private menuCount:number = 0;

  constructor(route:string,
              name:string,
              childs:Routes,
              menuCount,
              data?)
  {
    this.route = _.split(route, '/')[0];
    this.name = name;
    this.data = data;
    this.hasChildren = !_.isEmpty(childs);
    this.menuCount = menuCount;
    this.urlSerializer = new DefaultUrlSerializer();


    if(this.menuCount > 0){
      this.style += this.menuCount;
    }
    if(this.hasChildren){
      this.children = _.map(childs, _.bind(this.routeToMenuItem,this));
    }

    //normally i dont like logic in constructors
    if(data.framerPath != null){
      let tmpUrl =  this.urlSerializer.parse(data.framerPath)
                                        .toString()
                                          .split('/')
                                            .join('%2F');
      this.route += '/' + tmpUrl;
    }
  }
  private routeToMenuItem(route:Route,menuCount?):MenuItem{
    let count = this.menuCount+1;
    return new MenuItem(route.path, String(_.get(route.data,"title")),
                        route.children,count,route.data);
  }

  getStyle():string{ return this.style }
  public hasArrow(){
    if(this.hasChildren && this.menuCount == 1){
      return true;
    }
    return false;
  }
  public getMenuCount():number{
    return this.menuCount;
  }
  public toggleChild(){
    this.collapsed = !this.collapsed;
  }

}

