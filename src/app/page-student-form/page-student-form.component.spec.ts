import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStudentFormComponent } from './page-student-form.component';

describe('PageStudentFormComponent', () => {
  let component: PageStudentFormComponent;
  let fixture: ComponentFixture<PageStudentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageStudentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageStudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
