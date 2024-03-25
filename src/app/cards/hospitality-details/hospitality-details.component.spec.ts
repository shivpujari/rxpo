import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalityDetailsComponent } from './hospitality-details.component';

describe('HospitalityDetailsComponent', () => {
  let component: HospitalityDetailsComponent;
  let fixture: ComponentFixture<HospitalityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalityDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HospitalityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
