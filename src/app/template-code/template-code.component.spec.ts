import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCodeComponent } from './template-code.component';

describe('TemplateCodeComponent', () => {
  let component: TemplateCodeComponent;
  let fixture: ComponentFixture<TemplateCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
