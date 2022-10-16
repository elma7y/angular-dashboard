import { DraftsComponent } from './drafts/drafts.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthguardGuard } from './Guard/authguard.guard';
import { SigninComponent } from './auth/signin/signin.component';
import { RegisterComponent } from './auth/register/register.component';
import { PlansComponent } from './plans/plans.component';
import { FilesComponent } from './files/files.component';
import { FriendsComponent } from './friends/friends.component';
import { CoursesComponent } from './courses/courses.component';
import { ProjetcsComponent } from './projetcs/projetcs.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent,
  },
  { path: 'signin', component: SigninComponent },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'projects',
    component: ProjetcsComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: 'friends',
    component: FriendsComponent,
    canActivate: [AuthguardGuard],
  },
  { path: 'files', component: FilesComponent, canActivate: [AuthguardGuard] },
  { path: 'plans', component: PlansComponent, canActivate: [AuthguardGuard] },
  { path: 'drafts', component: DraftsComponent, canActivate: [AuthguardGuard] },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
