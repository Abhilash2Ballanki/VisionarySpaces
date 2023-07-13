import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyorSellComponent } from './buyor-sell.component';

describe('BuyorSellComponent', () => {
  let component: BuyorSellComponent;
  let fixture: ComponentFixture<BuyorSellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyorSellComponent]
    });
    fixture = TestBed.createComponent(BuyorSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
