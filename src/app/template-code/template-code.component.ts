import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-code',
  templateUrl: './template-code.component.html',
  styleUrls: ['./template-code.component.scss'],
})
export class TemplateCodeComponent implements OnInit {
  @Input() public htmlContent: string;
  constructor() {}

  ngOnInit(): void {
    this.htmlContent = this.htmlContent.replace(
      "<app-template-code [htmlContent]='currContent'></app-template-code>",
      ""
    );
  }
}
