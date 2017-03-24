import { Component, OnInit, Input } from '@angular/core';
import { Plant } from '../shared/plant';
@Component({
  selector: 'app-bed',
  templateUrl: './bed.component.html',
  styleUrls: ['./bed.component.scss']
})
export class BedComponent implements OnInit {
  @Input() plants: Plant[];
  constructor() { }

  ngOnInit() {
    
  }

}
