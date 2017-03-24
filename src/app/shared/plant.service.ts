import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Plant } from './plant';

import * as _ from "lodash";

@Injectable()
export class PlantService{
  private userId:number;

  plants:Plant[];
  constructor(private http:Http){}
  
  getPlants():Plant[]{
    return [new Plant("Rose", "Flora"), new Plant("Tulip", "Something something")];
  }

  logError(err): void {
    console.log(err);
  }
}
