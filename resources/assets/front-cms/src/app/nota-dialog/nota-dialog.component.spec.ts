import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaDialogComponent } from './nota-dialog.component';

describe('NotaDialogComponent', () => {
  let component: NotaDialogComponent;
  let fixture: ComponentFixture<NotaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
