import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingroomComponent } from './livingroom.component';

describe('LivingroomComponent', () => {
  let component: LivingroomComponent;
  let fixture: ComponentFixture<LivingroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivingroomComponent]
    });
    fixture = TestBed.createComponent(LivingroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
