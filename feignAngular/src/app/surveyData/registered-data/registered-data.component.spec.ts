import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredDataComponent } from './registered-data.component';

describe('RegisteredDataComponent', () => {
  let component: RegisteredDataComponent;
  let fixture: ComponentFixture<RegisteredDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisteredDataComponent]
    });
    fixture = TestBed.createComponent(RegisteredDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
