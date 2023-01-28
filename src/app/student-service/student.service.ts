import {Injectable} from '@angular/core';
import {StudentModel} from "../model/StudentModel";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  nextStudentId: number = 1
  studentList: StudentModel[] = []

  constructor() {
    // push ==> add()
    // this.studentList.push({
    //   id: 1,
    //   imie: 'pawel',
    //   nazwisko: 'gawel',
    //   dataUrodzenia: '2022-01-01'
    // })
  }

  // nazwa metody   => dodajStudenta
  // nowyStudent    => nazwa parametru
  // :StudentModel  => typ parametru
  // :void          => typ zwracany funkcji
  dodajStudenta(nowyStudent: StudentModel): void {
    nowyStudent.id = this.nextStudentId++
    this.studentList.push(nowyStudent)
  }

  usunStudentaWSerwisie(id: number): void {
    let znalezionyStudent;
    for (const student of this.studentList) {
      if (student.id == id) {
        znalezionyStudent = student;
        break;
      }
    }

    if (znalezionyStudent == undefined){
      return
    }

    const index = this.studentList.indexOf(znalezionyStudent, 0)
    this.studentList.splice(index, 1) // usunięcie 1 elementu na pozycji index
  }
}
