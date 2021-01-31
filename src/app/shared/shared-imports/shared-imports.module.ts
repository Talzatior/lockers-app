import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import {InputTextModule} from 'primeng/inputtext';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    BrowserAnimationsModule,
    ButtonModule,
    MenuModule,
    InputTextModule
  ], 
  exports: [
    BrowserAnimationsModule,
    ButtonModule,
    MenuModule,
    InputTextModule
  ]
})
export class SharedImportsModule { }
