import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedPaymentComponent } from './finished-payment.component';

describe('FinishedPaymentComponent', () => {
  let component: FinishedPaymentComponent;
  let fixture: ComponentFixture<FinishedPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
