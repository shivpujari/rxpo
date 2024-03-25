import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSegmentsComponent } from './tech-segments.component';

describe('TechSegmentsComponent', () => {
  let component: TechSegmentsComponent;
  let fixture: ComponentFixture<TechSegmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechSegmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechSegmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
