import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TloSrodekComponent } from './tlo-srodek/tlo-srodek.component';
import { PanelLewyComponent } from './panel-lewy/panel-lewy.component';
import { PanelPrawyGlownyComponent } from './panel-prawy-glowny/panel-prawy-glowny.component';
import {AppRoutingModule} from "./app-routing.module";
import { PageMainComponent } from './page-main/page-main.component';
import { PageStudentListComponent } from './page-student-list/page-student-list.component';
import { PageStudentFormComponent } from './page-student-form/page-student-form.component';
import {StudentService} from "./student-service/student.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TloSrodekComponent,
    PanelLewyComponent,
    PanelPrawyGlownyComponent,
    PageMainComponent,
    PageStudentListComponent,
    PageStudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
