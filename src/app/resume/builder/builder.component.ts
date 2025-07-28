import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ResumeService } from '../../core/resume.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  resumeForm!: FormGroup;

  fonts = [
    'Segoe UI', 'Arial', 'Georgia', 'Times New Roman', 'Roboto', 'Montserrat', 'Lato', 'Open Sans'
  ];
  colors = [
    '#1976d2', '#388e3c', '#d32f2f', '#fbc02d', '#7b1fa2', '#455a64', '#222', '#e65100'
  ];

  constructor(private fb: FormBuilder, private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.resumeForm = this.fb.group({
      personal: this.fb.group({
        name: [''],
        title: [''],
        email: [''],
        phone: [''],
        linkedin: [''],
        github: [''],
        portfolio: [''],
        twitter: ['']
      }),
      education: this.fb.array([]),
      experience: this.fb.array([]),
      skills: this.fb.array([]),
      certifications: this.fb.array([]),
      projects: this.fb.array([]),
      languages: this.fb.array([]),
      awards: this.fb.array([]),
      references: this.fb.array([]),
      customSections: this.fb.array([]),
      customization: this.fb.group({
        font: ['Segoe UI'],
        color: ['#1976d2']
      })
    });

    // Load from service
    const data = this.resumeService.loadResume();
    if (data) {
      this.resumeForm.patchValue(data);
      this.setFormArray('education', data.education);
      this.setFormArray('experience', data.experience);
      this.setFormArray('skills', data.skills);
      this.setFormArray('customSections', data.customSections);
      if (data.customization) {
        this.resumeForm.get('customization')?.patchValue(data.customization);
      }
      this.setFormArray('certifications', data.certifications);
      this.setFormArray('projects', data.projects);
      this.setFormArray('languages', data.languages);
      this.setFormArray('awards', data.awards);
      this.setFormArray('references', data.references);
    }

    this.resumeForm.valueChanges.subscribe(val => {
      this.resumeService.updateResume(val);
    });
  }

  get education() {
    return this.resumeForm.get('education') as FormArray;
  }
  get experience() {
    return this.resumeForm.get('experience') as FormArray;
  }
  get skills() {
    return this.resumeForm.get('skills') as FormArray;
  }

  get certifications() {
    return this.resumeForm.get('certifications') as FormArray;
  }
  get projects() {
    return this.resumeForm.get('projects') as FormArray;
  }
  get languages() {
    return this.resumeForm.get('languages') as FormArray;
  }
  get awards() {
    return this.resumeForm.get('awards') as FormArray;
  }
  get references() {
    return this.resumeForm.get('references') as FormArray;
  }

  get customSections() {
    return this.resumeForm.get('customSections') as FormArray;
  }

  get customization() {
    return this.resumeForm.get('customization');
  }

  addEducation() {
    this.education.push(this.fb.group({
      institution: [''],
      degree: [''],
      year: ['']
    }));
  }

  addExperience() {
    this.experience.push(this.fb.group({
      company: [''],
      role: [''],
      years: ['']
    }));
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  addCertification() {
    this.certifications.push(this.fb.group({
      name: [''],
      issuer: [''],
      year: ['']
    }));
  }
  addProject() {
    this.projects.push(this.fb.group({
      name: [''],
      description: [''],
      link: ['']
    }));
  }
  addLanguage() {
    this.languages.push(this.fb.group({
      name: [''],
      proficiency: ['']
    }));
  }
  addAward() {
    this.awards.push(this.fb.group({
      name: [''],
      year: [''],
      description: ['']
    }));
  }
  addReference() {
    this.references.push(this.fb.group({
      name: [''],
      contact: [''],
      relation: ['']
    }));
  }

  addCustomSection() {
    this.customSections.push(this.fb.group({
      title: [''],
      content: ['']
    }));
  }

  removeCustomSection(i: number) {
    this.customSections.removeAt(i);
  }
  removeCertification(i: number) { this.certifications.removeAt(i); }
  removeProject(i: number) { this.projects.removeAt(i); }
  removeLanguage(i: number) { this.languages.removeAt(i); }
  removeAward(i: number) { this.awards.removeAt(i); }
  removeReference(i: number) { this.references.removeAt(i); }

  setFont(font: string) {
    if (this.customization) {
      this.customization.patchValue({ font });
    }
  }

  setColor(color: string) {
    if (this.customization) {
      this.customization.patchValue({ color });
    }
  }

  private setFormArray(name: string, items: any[]) {
    const formArray = this.resumeForm.get(name) as FormArray;
    if (!items) return;
    items.forEach(item => {
      if (typeof item === 'string') {
        formArray.push(this.fb.control(item));
      } else {
        formArray.push(this.fb.group(item));
      }
    });
  }
}
