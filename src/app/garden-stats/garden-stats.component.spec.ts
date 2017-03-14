import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenStatsComponent } from './garden-stats.component';

describe('GardenStatsComponent', () => {
  let component: GardenStatsComponent;
  let fixture: ComponentFixture<GardenStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardenStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
