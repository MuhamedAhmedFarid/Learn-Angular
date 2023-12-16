import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenrsComponent } from './partenrs.component';

describe('PartenrsComponent', () => {
  let component: PartenrsComponent;
  let fixture: ComponentFixture<PartenrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartenrsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartenrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
