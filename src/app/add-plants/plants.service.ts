import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import * as _ from "lodash";

@Injectable()
export class PlantsService{

  plants:Plant[];
  
  constructor(private http:Http){}
  

  getPlants(){
    return this.http.get('user')
      .map(
        (resp) => {
            console.log(resp.json());
            return _.get(resp.json(),'plants') as Plant[];
        });
        
  }

  logError(err): void {
    console.log(err);
  }
}


export interface Plant{
    name:string;
}