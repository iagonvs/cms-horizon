import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfistaDialogComponent } from './surfista-dialog.component';

describe('SurfistaDialogComponent', () => {
  let component: SurfistaDialogComponent;
  let fixture: ComponentFixture<SurfistaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfistaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfistaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
