import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAddCustomerAddressComponent } from './forms-add-customer-address.component';

describe('FormsAddCustomerAddressComponent', () => {
  let component: FormsAddCustomerAddressComponent;
  let fixture: ComponentFixture<FormsAddCustomerAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsAddCustomerAddressComponent]
    });
    fixture = TestBed.createComponent(FormsAddCustomerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
