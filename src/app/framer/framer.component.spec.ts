/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FramerComponent } from './framer.component';

describe('FramerComponent', () => {
  let component: FramerComponent;
  let fixture: ComponentFixture<FramerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
