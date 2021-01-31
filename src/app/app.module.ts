import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedImportsModule } from './shared/shared-imports/shared-imports.module';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { MenuComponent } from './menu/menu.component';
import { LockersAdminModule } from './lockers-admin/lockers-admin.module';



@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SharedImportsModule,
    FormsModule,
    LockersAdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
