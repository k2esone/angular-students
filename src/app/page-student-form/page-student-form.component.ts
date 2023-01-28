import {Component} from '@angular/core';
import {DEFAULT_STUDENT_MODEL, StudentModel} from "../model/StudentModel";
import {StudentService} from "../student-service/student.service";

@Component({
  selector: 'app-page-student-form',
  templateUrl: './page-student-form.component.html',
  styleUrls: ['./page-student-form.component.css']
})
export class PageStudentFormComponent {
  dodawanyStudent: StudentModel

  constructor(protected studentService: StudentService) {
    // Object.assign({}, DEFAULT_STUDENT_MODEL) => kopiowanie obiektu
    this.dodawanyStudent = Object.assign({}, DEFAULT_STUDENT_MODEL)
  }

  dodajStudentaDoSerwisu(): void {
    this.studentService.dodajStudenta(this.dodawanyStudent);
    this.dodawanyStudent = Object.assign({}, DEFAULT_STUDENT_MODEL)
  }

  wyczyscFormularz(): void {
    this.dodawanyStudent = Object.assign({}, DEFAULT_STUDENT_MODEL)
  }
}
