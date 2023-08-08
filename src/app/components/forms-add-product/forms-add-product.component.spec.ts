import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAddProductComponent } from './forms-add-product.component';

describe('FormsAddProductComponent', () => {
  let component: FormsAddProductComponent;
  let fixture: ComponentFixture<FormsAddProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsAddProductComponent]
    });
    fixture = TestBed.createComponent(FormsAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
