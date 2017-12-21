import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCarrinhoComponent } from './listar-carrinho.component';

describe('ListarCarrinhoComponent', () => {
  let component: ListarCarrinhoComponent;
  let fixture: ComponentFixture<ListarCarrinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCarrinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
