import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedcomponentComponent } from './bedcomponent.component';

describe('BedcomponentComponent', () => {
  let component: BedcomponentComponent;
  let fixture: ComponentFixture<BedcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BedcomponentComponent]
    });
    fixture = TestBed.createComponent(BedcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
