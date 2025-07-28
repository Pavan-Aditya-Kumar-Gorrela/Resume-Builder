import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ProfessionalTemplateComponent } from './professional-template.component';

declare const describe: any, beforeEach: any, it: any, expect: any;

describe('ProfessionalTemplateComponent', () => {
  let component: ProfessionalTemplateComponent;
  let fixture: ComponentFixture<ProfessionalTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 