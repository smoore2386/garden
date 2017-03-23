import { Component, OnInit } from '@angular/core';
import { Plant } from '../shared/plant';
import { PlantsService } from '../shared/plants.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {

  @Input() plant: Plant;
  constructor() { }
  
  ngOnInit() {
  }

}
