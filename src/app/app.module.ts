import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PlansComponent } from './plans/plans.component';
import { FriendsComponent } from './friends/friends.component';
import { CoursesComponent } from './courses/courses.component';
import { ProjetcsComponent } from './projetcs/projetcs.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { FilesComponent } from './files/files.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './auth/register/register.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DraftsComponent } from './drafts/drafts.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FilesComponent,
    SettingsComponent,
    ProfileComponent,
    ProjetcsComponent,
    CoursesComponent,
    FriendsComponent,
    PlansComponent,
    SidebarComponent,
    HeaderComponent,
    RegisterComponent,
    SigninComponent,
    NotfoundComponent,
    DraftsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
