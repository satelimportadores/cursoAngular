import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaHackComponent } from './hola-hack.component';

describe('HolaHackComponent', () => {
  let component: HolaHackComponent;
  let fixture: ComponentFixture<HolaHackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolaHackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaHackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
