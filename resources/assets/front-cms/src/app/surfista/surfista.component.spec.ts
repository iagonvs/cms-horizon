import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfistaComponent } from './surfista.component';

describe('SurfistaComponent', () => {
  let component: SurfistaComponent;
  let fixture: ComponentFixture<SurfistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
