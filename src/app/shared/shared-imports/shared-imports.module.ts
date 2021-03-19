import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import {CheckboxModule} from 'primeng/checkbox';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    BrowserAnimationsModule,
    ButtonModule,
    MenuModule,
    InputTextModule,
    ToggleButtonModule,
    CheckboxModule
  ], 
  exports: [
    BrowserAnimationsModule,
    ButtonModule,
    MenuModule,
    InputTextModule,
    ToggleButtonModule,
    CheckboxModule
  ]
})
export class SharedImportsModule { }
