import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorankComponent } from './valorank.component';

describe('ValorankComponent', () => {
  let component: ValorankComponent;
  let fixture: ComponentFixture<ValorankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValorankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValorankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
