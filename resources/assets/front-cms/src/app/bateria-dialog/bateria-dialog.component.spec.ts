import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BateriaDialogComponent } from './bateria-dialog.component';

describe('BateriaDialogComponent', () => {
  let component: BateriaDialogComponent;
  let fixture: ComponentFixture<BateriaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateriaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BateriaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
