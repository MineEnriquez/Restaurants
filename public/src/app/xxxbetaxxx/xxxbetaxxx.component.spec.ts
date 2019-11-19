import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XxxbetaxxxComponent } from './xxxbetaxxx.component';

describe('XxxbetaxxxComponent', () => {
  let component: XxxbetaxxxComponent;
  let fixture: ComponentFixture<XxxbetaxxxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XxxbetaxxxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XxxbetaxxxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
