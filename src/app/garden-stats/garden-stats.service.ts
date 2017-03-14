import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { GardenStats } from './garden-stats.component';

@Injectable()
export class GardenStatsService {

  private stats: GardenStats;
  /**
   * Represents our GardenStatsComponent
   * @constructor
   * @param {Http} http - http object to consume services
   **/
  constructor(private http: Http){}

  /** Sets up the http to return the stats **/
  getStats():  Promise<GardenStats>{
    return this.http.get('garden/stats') 
      .map(res => res.json()) 
      .map(stats => {return this.stats = new GardenStats(stats.num1, stats.num2, stats.num3); } ) 
      .toPromise() 
      .catch(this.logError);

  }
  getInstance(){return this; }
  // Move into generic logger
  logError(err): void {
    console.log(err);
  }
}
