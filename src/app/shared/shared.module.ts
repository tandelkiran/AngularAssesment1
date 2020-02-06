import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FilterPipe } from './pipe/filter.pipe';
import { SortPipe } from './pipe/sort.pipe';
import { AutofocusDirective } from './directive/autofocus.directive';
import { DigitonlyDirective } from './directive/digitonly.directive';
import { CharsonlyDirective } from './directive/charsonly.directive';


@NgModule({
  declarations: [FilterPipe, SortPipe, AutofocusDirective, DigitonlyDirective, CharsonlyDirective],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [FilterPipe, SortPipe, AutofocusDirective, DigitonlyDirective, CharsonlyDirective]
})
export class SharedModule { }
