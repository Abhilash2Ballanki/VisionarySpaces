import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorComponent } from './interior.component';

describe('InteriorComponent', () => {
  let component: InteriorComponent;
  let fixture: ComponentFixture<InteriorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InteriorComponent]
    });
    fixture = TestBed.createComponent(InteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
