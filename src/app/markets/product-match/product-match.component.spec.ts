import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMatchComponent } from './product-match.component';

describe('ProductMatchComponent', () => {
  let component: ProductMatchComponent;
  let fixture: ComponentFixture<ProductMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
