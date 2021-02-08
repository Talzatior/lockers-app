import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LockerBackFemaleKindComponent } from './lockers-admin/locker-back/locker-back-female-kind/locker-back-female-kind.component';
import { LockerBackFemaleMechanicComponent } from './lockers-admin/locker-back/locker-back-female-mechanic/locker-back-female-mechanic.component';
import { LockerBackFemaleOfficeComponent } from './lockers-admin/locker-back/locker-back-female-office/locker-back-female-office.component';
import { LockerBackGenderComponent } from './lockers-admin/locker-back/locker-back-gender/locker-back-gender.component';
import { LockerBackMaleKindComponent } from './lockers-admin/locker-back/locker-back-male-kind/locker-back-male-kind.component';
import { LockerBackMaleMechanicComponent } from './lockers-admin/locker-back/locker-back-male-mechanic/locker-back-male-mechanic.component';
import { LockerBackMaleOfficeComponent } from './lockers-admin/locker-back/locker-back-male-office/locker-back-male-office.component';
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
  { path: 'locker-back/gender', component: LockerBackGenderComponent },
  { path: 'locker-back/woman-kind', component: LockerBackFemaleKindComponent },
  { path: 'locker-back/woman-office', component: LockerBackFemaleOfficeComponent },
  { path: 'locker-back/woman-mechanic', component: LockerBackFemaleMechanicComponent },
  { path: 'locker-back/man-kind', component: LockerBackMaleKindComponent },
  { path: 'locker-back/man-office', component: LockerBackMaleOfficeComponent },
  { path: 'locker-back/man-mechanic', component: LockerBackMaleMechanicComponent },
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
