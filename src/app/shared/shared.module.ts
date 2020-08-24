import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './services/storage.service';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    StorageService
  ]
})
export class SharedModule { }
