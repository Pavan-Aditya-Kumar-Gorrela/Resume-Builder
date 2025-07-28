import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <app-builder></app-builder>
      <app-preview></app-preview>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      padding: 20px;
      justify-content: center;
      background: #f0f4f8;
      min-height: 100vh;
    }
    app-builder, app-preview {
      flex: 1 1 480px;
      min-width: 300px;
    }
  `]

})



export class AppComponent {}
