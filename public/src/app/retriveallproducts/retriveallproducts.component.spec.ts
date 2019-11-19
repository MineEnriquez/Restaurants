import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetriveallproductsComponent } from './retriveallproducts.component';

describe('RetriveallproductsComponent', () => {
  let component: RetriveallproductsComponent;
  let fixture: ComponentFixture<RetriveallproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetriveallproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetriveallproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
