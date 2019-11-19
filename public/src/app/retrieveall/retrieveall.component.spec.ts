import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveallComponent } from './retrieveall.component';

describe('RetrieveallComponent', () => {
  let component: RetrieveallComponent;
  let fixture: ComponentFixture<RetrieveallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
