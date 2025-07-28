import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-classic-template',
  templateUrl: './classic-template.component.html',
  styleUrls: ['./classic-template.component.css']
})
export class ClassicTemplateComponent {
  @Input() data: any = {};
}
