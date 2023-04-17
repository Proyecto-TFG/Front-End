import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProveedorDialogComponent } from './editar-proveedor-dialog.component';

describe('EditarProveedorDialogComponent', () => {
  let component: EditarProveedorDialogComponent;
  let fixture: ComponentFixture<EditarProveedorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProveedorDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarProveedorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
