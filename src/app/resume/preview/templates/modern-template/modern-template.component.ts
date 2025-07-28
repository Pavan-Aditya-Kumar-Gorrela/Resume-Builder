import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modern-template',
  templateUrl: './modern-template.component.html',
  styleUrls: ['./modern-template.component.css']
})
export class ModernTemplateComponent {
  @Input() data: any = {};  // ✅ This is required for template access
}
