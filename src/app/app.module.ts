import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ResumeModule } from './resume/resume.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResumePageComponent } from './resume/resume-page.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'resume/builder', component: ResumePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ResumePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ResumeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
