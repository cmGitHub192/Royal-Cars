import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadobusquedaComponent } from './listadobusqueda.component';

describe('ListadobusquedaComponent', () => {
  let component: ListadobusquedaComponent;
  let fixture: ComponentFixture<ListadobusquedaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadobusquedaComponent]
    });
    fixture = TestBed.createComponent(ListadobusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
