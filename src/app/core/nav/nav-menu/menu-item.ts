
import { Routes,Route, DefaultUrlSerializer } from '@angular/router';
import * as _ from "lodash";


export class MenuItem{

  public route: string;
  public name: string;
  public collapsed = false;

  private children: Routes;
  private data: any;
  private hasChildren:boolean;
  private urlSerializer: DefaultUrlSerializer;
  private style = "defaultStyle";
  private menuCount = 0;


  /**
   * MenuItem constructor
   * @constructor
   * @param  {string} argA description
   * @param  {string} a
   * @param  {Routes} childs the collection of routes
   * @param  {number} menuCount Where are are at in the submenus
   * @param  {any}    data  collection of data contained in route
   */
  constructor(route:string,
              name:string,
              childs:Routes,
              menuCount,
              data?)
  {
    this.route = "/" + route;
    this.name = name;
    this.data = data;
    this.hasChildren = !_.isEmpty(childs);
    this.menuCount = menuCount;
    this.urlSerializer = new DefaultUrlSerializer();


    if(this.menuCount > 0){
      this.style += this.menuCount;
    }
    if(this.hasChildren){
      this.children = _.map(childs,_.bind(this.routeToMenuItem,this));
    }
  }
  private routeToMenuItem(route:Route,menuCount?):MenuItem{
    let count = this.menuCount+1;
    return new MenuItem(route.path, String(_.get(route.data,"title")),
                        route.children,count,route.data);
  }

  public getStyle():string{ return this.style }

  public hasArrow():boolean{
    if(this.hasChildren && _.eq(this.menuCount, 1)){
      return true;
    }
    return false;
  }
  public getMenuCount():number{
    return this.menuCount;
  }
  public toggleChild():void{
    this.collapsed = !this.collapsed;
  }

}
