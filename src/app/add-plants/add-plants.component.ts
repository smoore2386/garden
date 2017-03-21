import { Component, OnInit, OnChanges, OnDestroy, Input, EventEmitter, Output, Inject }from '@angular/core';
import {  FormGroup,FormArray,  FormBuilder,  Validators  } from '@angular/forms';
import { PlantService } from '../shared/plant.service';
import {MdIconRegistry} from '@angular/material';

import * as _ from "lodash";

@Component({
  selector: 'app-add-plants',
  templateUrl: './add-plants.component.html',
  styleUrls: ['./add-plants.component.scss'],
  providers:[PlantService]
})

export class AddPlantsComponent  implements OnInit{


  @Output() addingPlantEmitter: EventEmitter<any> = new EventEmitter();
  @Output() cancelledEmitter: EventEmitter<boolean> = new EventEmitter();

  public  form: FormGroup;
  private shown = false;
  private formValidated = false;

  constructor(private fb: FormBuilder) {}

  addPlant(){
      console.log("here");
    const ctrl = <FormArray>this.form.controls['plants'];
    ctrl.push(this.initPlant());
  }
 

  onTab(idx){
    const ctrl =  <FormArray>this.form.controls['plants'];

  }

  initPlant(){
    return this.fb.group( {
        name : ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  plant(){
    //call the service which will handle the planting of our plants
  }
  ngOnInit() {
        this.form = this.fb.group({ plants: this.fb.array([
        this.initPlant()
    ])});
    }
  }


    

export interface Plant{
    name:string;
}