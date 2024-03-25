import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingcrewComponent } from './movingcrew.component';

describe('MovingcrewComponent', () => {
  let component: MovingcrewComponent;
  let fixture: ComponentFixture<MovingcrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovingcrewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovingcrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
