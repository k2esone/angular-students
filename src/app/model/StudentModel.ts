// export ==> public
// type StudentModel ==> class StudentModel {}
export type StudentModel = {
  id: number
  imie: string
  nazwisko: string
  dataUrodzenia: string
}

export const DEFAULT_STUDENT_MODEL = {
  id: 1,
  imie: '',
  nazwisko: '',
  dataUrodzenia: '2000-01-01'
}
