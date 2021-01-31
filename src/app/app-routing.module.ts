import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LockerBackComponent } from './lockers-admin/locker-back/locker-back.component';
import { FemaleKindOfEmployeeComponent } from './lockers-admin/new-locker/female-kind-of-employee/female-kind-of-employee.component';
import { FemaleMechanicComponent } from './lockers-admin/new-locker/female-mechanic/female-mechanic.component';
import { FemaleOfficeComponent } from './lockers-admin/new-locker/female-office/female-office.component';
import { GenderComponent } from './lockers-admin/new-locker/gender/gender.component';
import { MaleKindOfEmployeeComponent } from './lockers-admin/new-locker/male-kind-of-employee/male-kind-of-employee.component';
import { MaleMechanicComponent } from './lockers-admin/new-locker/male-mechanic/male-mechanic.component';
import { MaleOfficeComponent } from './lockers-admin/new-locker/male-office/male-office.component';
import { SpareKeyInComponent } from './lockers-admin/spare-key-in/spare-key-in.component';
import { SpareKeyOutComponent } from './lockers-admin/spare-key-out/spare-key-out.component';
import { MenuComponent } from './menu/menu.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';



const routes: Routes = [
  { path:'', component: MenuComponent },
  { path: 'new-locker/gender', component: GenderComponent },
  { path: 'new-locker/male-kind-of-employee', component: MaleKindOfEmployeeComponent },
  { path: 'new-locker/male-mechanic', component: MaleMechanicComponent },
  { path: 'new-locker/male-office', component: MaleOfficeComponent },
  { path: 'new-locker/female-mechanic', component: FemaleMechanicComponent },
  { path: 'new-locker/female-office', component: FemaleOfficeComponent },
  { path: 'new-locker/female-kind-of-employee', component: FemaleKindOfEmployeeComponent },
  { path: 'locker-back', component: LockerBackComponent },
  { path: 'spare-key-out', component: SpareKeyOutComponent },
  { path: 'spare-key-in', component: SpareKeyInComponent },
  { path: '**', component: NotfoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
