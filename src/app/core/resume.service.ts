import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private resumeData = new BehaviorSubject<any>(this.loadResume() || this.getDefaultResume());
  resume$ = this.resumeData.asObservable();

  updateResume(data: any) {
    this.resumeData.next(data);
    localStorage.setItem('resume', JSON.stringify(data));
  }

  loadResume() {
    const saved = localStorage.getItem('resume');
    return saved ? JSON.parse(saved) : null;
  }

  getDefaultResume() {
    return {
      personal: { name: '', title: '', email: '' },
      education: [],
      experience: [],
      skills: []
    };
  }
}
