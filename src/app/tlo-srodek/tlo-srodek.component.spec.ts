import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TloSrodekComponent } from './tlo-srodek.component';

describe('TloSrodekComponent', () => {
  let component: TloSrodekComponent;
  let fixture: ComponentFixture<TloSrodekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TloSrodekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TloSrodekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
