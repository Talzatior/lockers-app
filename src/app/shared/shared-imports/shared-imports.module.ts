import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { MenuModule } from 'primeng/menu';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    BrowserAnimationsModule,
    ButtonModule,
    MenuModule
  ], 
  exports: [
    BrowserAnimationsModule,
    ButtonModule,
    MenuModule
  ]
})
export class SharedImportsModule { }
