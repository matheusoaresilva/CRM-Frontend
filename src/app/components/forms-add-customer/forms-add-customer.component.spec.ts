import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAddCustomerComponent } from './forms-add-customer.component';

describe('FormsAddCustomerComponent', () => {
  let component: FormsAddCustomerComponent;
  let fixture: ComponentFixture<FormsAddCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsAddCustomerComponent]
    });
    fixture = TestBed.createComponent(FormsAddCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
