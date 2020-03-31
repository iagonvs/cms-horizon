import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OndaDialogComponent } from './onda-dialog.component';

describe('OndaDialogComponent', () => {
  let component: OndaDialogComponent;
  let fixture: ComponentFixture<OndaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OndaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OndaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
