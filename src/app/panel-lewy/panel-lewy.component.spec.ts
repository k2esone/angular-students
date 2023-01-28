import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLewyComponent } from './panel-lewy.component';

describe('PanelLewyComponent', () => {
  let component: PanelLewyComponent;
  let fixture: ComponentFixture<PanelLewyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelLewyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelLewyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
