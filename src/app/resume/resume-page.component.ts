import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-page',
  template: `
    <div class="resume-page-container">
      <app-builder></app-builder>
      <app-preview></app-preview>
    </div>
  `,
  styles: [`
    .resume-page-container {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      padding: 32px 16px;
      justify-content: center;
      background: linear-gradient(135deg, #e3f0ff 0%, #f8fbff 100%);
      min-height: 100vh;
    }
    app-builder, app-preview {
      flex: 1 1 480px;
      min-width: 320px;
      max-width: 600px;
    }
    @media (max-width: 900px) {
      .resume-page-container {
        flex-direction: column;
        align-items: center;
        gap: 24px;
      }
    }
  `]
})
export class ResumePageComponent {} 