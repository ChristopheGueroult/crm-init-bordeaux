import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateOneComponent } from './templates/template-one/template-one.component';
import { TemplateTwoComponent } from './templates/template-two/template-two.component';
import { PageTitleComponent } from './components/page-title/page-title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TemplateOneComponent, TemplateTwoComponent, PageTitleComponent],
  exports: [TemplateOneComponent, TemplateTwoComponent, PageTitleComponent]
})
export class PagesTemplatesModule { }
