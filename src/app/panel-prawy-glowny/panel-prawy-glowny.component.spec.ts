import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPrawyGlownyComponent } from './panel-prawy-glowny.component';

describe('PanelPrawyGlownyComponent', () => {
  let component: PanelPrawyGlownyComponent;
  let fixture: ComponentFixture<PanelPrawyGlownyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelPrawyGlownyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelPrawyGlownyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
