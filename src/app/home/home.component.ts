import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../add-plants/plants.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private plants: any;
  constructor(private plantsService: PlantsService){
    this.plantsService.getPlants().subscribe(res => this.plants = res);
  }
  ngOnInit() {
      
  }

}
