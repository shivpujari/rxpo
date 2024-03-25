import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmingDetailsComponent } from './farming-details.component';

describe('FarmingDetailsComponent', () => {
  let component: FarmingDetailsComponent;
  let fixture: ComponentFixture<FarmingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmingDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
