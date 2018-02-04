import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradepairComponent } from './tradepair.component';

describe('TradepairComponent', () => {
  let component: TradepairComponent;
  let fixture: ComponentFixture<TradepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
