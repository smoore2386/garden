
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
   * @param  {string} route string representation of the route
   * @param  {string} name title or name of the menuitem
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
    this.route = route
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
    if(data.framerPath != null){
        
      let tmpUrl =  this.urlSerializer.parse(data.framerPath).toString();
      this.route = route.split('/')[0]  + tmpUrl;
    }    
  }
  /**
   * routeToMenuItem - turns a route into a MenuItem
   * @param  {Route}  route  an angular2 route
   * @param  {number} menuCount OPTIONAL -- numeric value of menucount
   * @return {MenuItem} the new menuItem created from Route
   */
  private routeToMenuItem(route:Route,menuCount?):MenuItem{
    return new MenuItem(route.path,
       String(_.get(route.data,"title")),
       route.children,
       _.add(this.menuCount,1),
       route.data);
  }
  /** Returns the class name of the css style **/
  public getStyle():string{ return this.style }

  /** Does this menu have a submenu if so show an arrow **/
  public hasArrow():boolean{
    if(this.hasChildren && _.eq(this.menuCount, 1)){
      return true;
    }
    return false;
  }
  /** the menucount number**/
  public getMenuCount():number{
    return this.menuCount;
  }
  /** Show or hide the child components **/
  public toggleChild():void{
    this.collapsed = !this.collapsed;
  }

}
