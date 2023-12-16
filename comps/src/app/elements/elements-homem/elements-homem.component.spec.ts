import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsHomemComponent } from './elements-homem.component';


describe('ElementsHomemComponent', () => {
  let component: ElementsHomemComponent;
  let fixture: ComponentFixture<ElementsHomemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementsHomemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementsHomemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
