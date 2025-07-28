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
    if (!element) return;
    // Inject font and color styles for PDF export
    const style = document.createElement('style');
    const font = this.resumeData?.customization?.font || 'Segoe UI';
    const color = this.resumeData?.customization?.color || '#1976d2';
    style.innerHTML = `
      * { font-family: '${font}', Arial, sans-serif !important; }
      h2 { color: ${color} !important; border-bottom: 2px solid ${color} !important; }
    `;
    element.appendChild(style);
    const options = {
      margin:       0.5,
      filename:     'my-resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(options).from(element).save().then(() => {
      element.removeChild(style);
    });
  }
}
