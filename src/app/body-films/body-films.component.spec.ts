import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyFilmsComponent } from './body-films.component';

describe('BodyFilmsComponent', () => {
  let component: BodyFilmsComponent;
  let fixture: ComponentFixture<BodyFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
