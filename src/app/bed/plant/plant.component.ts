import { Component, OnInit, Input } from '@angular/core';
import { Plant } from '../../shared/plant';
import { PlantService } from '../../shared/plant.service';

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
