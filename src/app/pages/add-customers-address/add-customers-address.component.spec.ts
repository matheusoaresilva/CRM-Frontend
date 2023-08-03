import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomersAddressComponent } from './add-customers-address.component';

describe('AddCustomersAddressComponent', () => {
  let component: AddCustomersAddressComponent;
  let fixture: ComponentFixture<AddCustomersAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCustomersAddressComponent]
    });
    fixture = TestBed.createComponent(AddCustomersAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
