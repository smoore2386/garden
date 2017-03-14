import { Component, OnInit, OnChanges, OnDestroy, Input, EventEmitter, Output, Inject }from '@angular/core';
import {  FormGroup,FormArray,  FormBuilder,  Validators  } from '@angular/forms';
import { PlantService } from '../shared/plant.service';
import * as _ from "lodash";

@Component({
  moduleId: String(module.id),
  selector: 'app-add-plants',
  templateUrl: './add-plants.component.html',
  styleUrls: ['./add-plants.component.scss'],
  providers:[PlantService]
})

export class AddPlantComponent  implements OnInit, OnChanges{


  @Output() addingPlantEmitter: EventEmitter<any> = new EventEmitter();
  @Output() cancelledEmitter: EventEmitter<boolean> = new EventEmitter();

  public  form: FormGroup;
  private shown = false;
  private formValidated = false;


  constructor(private fb: FormBuilder,private plantService: PlantService) {}

  ngOnChanges(changes){
    this.form = this.fb.group({
      nodes: this.fb.array([this.initNode()])
    });
    
    if(this.cluster){
      this.addNode();
      this.addNode();
    }

  }
  ngOnInit() {
    this.form.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }

  addPlants(){
    const ctrl = <FormArray>this.form.controls['plants'];
    ctrl.push(this.newPlant());
  }

  onTab(idx){
    const ctrl =  <FormArray>this.form.controls['plants'];
    this.addPlants();
  }

  initPlant(){
    return this.fb.group( {
      'plantName' : ['', [Validators.required, Validators.minLength(3)]]})
  }

  plant(){
    //call the service which will handle the planting of our plants
  }
}
