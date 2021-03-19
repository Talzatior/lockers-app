import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LockerBackGenderComponent } from './lockers-admin/locker-back/locker-back-gender/locker-back-gender.component';
import { LockerBackFemaleComponent } from './lockers-admin/locker-back/locker-back-female/locker-back-female.component';
import { LockerBackMaleKindComponent } from './lockers-admin/locker-back/locker-back-male-kind/locker-back-male-kind.component';
import { LockerBackMaleMechanicComponent } from './lockers-admin/locker-back/locker-back-male-mechanic/locker-back-male-mechanic.component';
import { LockerBackMaleOfficeComponent } from './lockers-admin/locker-back/locker-back-male-office/locker-back-male-office.component';
import { FemaleKindOfEmployeeComponent } from './lockers-admin/new-locker/female-kind-of-employee/female-kind-of-employee.component';
import { FemaleMechanicComponent } from './lockers-admin/new-locker/female-mechanic/female-mechanic.component';
import { FemaleOfficeComponent } from './lockers-admin/new-locker/female-office/female-office.component';
import { GenderComponent } from './lockers-admin/new-locker/gender/gender.component';
import { MaleKindOfEmployeeComponent } from './lockers-admin/new-locker/male-kind-of-employee/male-kind-of-employee.component';
import { MaleMechanicComponent } from './lockers-admin/new-locker/male-mechanic/male-mechanic.component';
import { MaleOfficeComponent } from './lockers-admin/new-locker/male-office/male-office.component';
import { SpareKeyInGenderComponent } from './lockers-admin/spare-key-in/spare-key-in-gender/spare-key-in-gender.component';
import { SpareKeyInWomanComponent } from './lockers-admin/spare-key-in/spare-key-in-woman/spare-key-in-woman.component';
import { SpareKeyOutGenderComponent } from '../app/lockers-admin/spare-key-out/spare-key-out-gender/spare-key-out-gender.component';
import { SpareKeyOutWomanComponent } from '../app/lockers-admin/spare-key-out/spare-key-out-woman/spare-key-out-woman.component';
import { MenuComponent } from './menu/menu.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { SpareKeyOutManComponent } from './lockers-admin/spare-key-out/spare-key-out-man/spare-key-out-man.component';
import { SpareKeyInManComponent } from './lockers-admin/spare-key-in/spare-key-in-man/spare-key-in-man.component';



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
  { path: 'locker-back/woman-kind', component: LockerBackFemaleComponent },
  { path: 'locker-back/man-kind', component: LockerBackMaleKindComponent },
  { path: 'locker-back/man-office', component: LockerBackMaleOfficeComponent },
  { path: 'locker-back/man-mechanic', component: LockerBackMaleMechanicComponent },
  { path: 'sparekey-in/gender', component: SpareKeyInGenderComponent },
  { path: 'sparekey-in/woman', component: SpareKeyInWomanComponent },
  { path: 'sparekey-in/man', component: SpareKeyInManComponent },
  { path: 'spare-key-out/gender', component: SpareKeyOutGenderComponent },
  { path: 'spare-key-out/woman', component: SpareKeyOutWomanComponent },
  { path: 'spare-key-out/man', component: SpareKeyOutManComponent },
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
