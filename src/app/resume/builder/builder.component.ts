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

  constructor(private fb: FormBuilder, private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.resumeForm = this.fb.group({
      personal: this.fb.group({
        name: [''],
        title: [''],
        email: ['']
      }),
      education: this.fb.array([]),
      experience: this.fb.array([]),
      skills: this.fb.array([])
    });

    // Load from service
    const data = this.resumeService.loadResume();
    if (data) {
      this.resumeForm.patchValue(data);
      this.setFormArray('education', data.education);
      this.setFormArray('experience', data.experience);
      this.setFormArray('skills', data.skills);
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

  private setFormArray(name: string, items: any[]) {
    const formArray = this.resumeForm.get(name) as FormArray;
    items.forEach(item => {
      if (typeof item === 'string') {
        formArray.push(this.fb.control(item));
      } else {
        formArray.push(this.fb.group(item));
      }
    });
  }
}
