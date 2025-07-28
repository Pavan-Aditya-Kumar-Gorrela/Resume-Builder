import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../core/resume.service';


declare const html2pdf: any; // 👈 Declare external JS

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  resumeData: any = {};
  template: string = 'modern';

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.resumeService.resume$.subscribe(data => this.resumeData = data);
  }

  exportPDF() {
    const element = document.getElementById('resume-content');
    const options = {
      margin:       0.5,
      filename:     'my-resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(options).from(element).save();
  }
}
