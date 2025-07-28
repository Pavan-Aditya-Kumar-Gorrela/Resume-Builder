import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BuilderComponent } from './builder/builder.component';
import { PreviewComponent } from './preview/preview.component';
import { PersonalInfoComponent } from './builder/form-sections/personal-info/personal-info.component';
import { EducationComponent } from './builder/form-sections/education/education.component';
import { ExperienceComponent } from './builder/form-sections/experience/experience.component';
import { SkillsComponent } from './builder/form-sections/skills/skills.component';

import { ModernTemplateComponent } from './preview/templates/modern-template/modern-template.component';
import { ClassicTemplateComponent } from './preview/templates/classic-template/classic-template.component';
import { ProfessionalTemplateComponent } from './preview/templates/professional-template/professional-template.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    BuilderComponent,
    PreviewComponent,
    PersonalInfoComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ModernTemplateComponent,
    ClassicTemplateComponent,
    ProfessionalTemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatDividerModule
  ],
  exports: [
    BuilderComponent,
    PreviewComponent
  ]
})
export class ResumeModule { }
