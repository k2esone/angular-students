import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageMainComponent} from "./page-main/page-main.component";
import {PageStudentListComponent} from "./page-student-list/page-student-list.component";
import {PageStudentFormComponent} from "./page-student-form/page-student-form.component";

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: PageMainComponent},
  {path: "student-list", component: PageStudentListComponent},
  {path: "student-form", component: PageStudentFormComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
