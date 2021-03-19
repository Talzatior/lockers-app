import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpareKeyInGenderComponent } from './spare-key-in-gender/spare-key-in-gender.component';
import { SpareKeyInWomanComponent } from './spare-key-in-woman/spare-key-in-woman.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedImportsModule } from 'src/app/shared/shared-imports/shared-imports.module';
import { SpareKeyInManComponent } from './spare-key-in-man/spare-key-in-man.component';



@NgModule({
  declarations: [SpareKeyInGenderComponent, SpareKeyInWomanComponent, SpareKeyInManComponent],
  imports: [
    BrowserModule,
    CommonModule,
    SharedImportsModule,
    FormsModule
  ]
})
export class SpareKeyInModule { }
