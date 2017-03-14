import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { GardenStatsService } from './garden-stats.service';

@Component({
  selector: 'app-garden-stats',
  templateUrl: './garden-stats.component.html',
  styleUrls: ['./garden-stats.component.scss'],
  providers: [GardenStatsService]   //include our service

})
export class GardenStatsComponent implements OnInit, OnDestroy {

  private stats = new GardenStats(0, 0, 0);
  private poller: Subscription;

  /**
   * Represents our GardenStatsComponent
   * @constructor
   * @param {GardenStatsService} statsService -yes
   */
  constructor(private statsService: GardenStatsService) {}

  /** Returns stats from Service and adds to our stats object **/
  getStats(): void{
    this.statsService.getInstance()
      .getStats().then((stats) => {this.stats = stats; }); // should probably update the object here
  }
  /** Initialize Polling **/
  initPoll(){
    return Observable.interval(500)
      .map(() => {
        return this.getStats();
      });
  }
  /** Subscribe our poller to the service **/
  ngOnInit() {
    this.poller = this.initPoll().subscribe(test => test) ;

  }
  /** Unsubscribe from when we leave the page **/
  ngOnDestroy(){
    this.poller.unsubscribe();
  }

}
export class GardenStats{
  num1: number;
  num2: number;
  num3: number;

  /**
   * Represents our GardenStatsComponent
   * need to fill in what we will need here
   * @constructor
   * @param {number} 
   * @param {number} 
   * @param {number} 
   */
  constructor(num1, num2, num3){
    
  }
}
