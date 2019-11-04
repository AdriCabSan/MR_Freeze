import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileMenuRoutingModule } from './profile-menu-routing.module';
import { ProfileMenuComponent } from './profile-menu.component';
import { LoginContainer1Component } from './login-container1/login-container1.component';
import { SignUpForm1Component } from './sign-up-form1/sign-up-form1.component';
import { Statistics1Component } from './statistics1/statistics1.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProfileMenuComponent, LoginContainer1Component, SignUpForm1Component, Statistics1Component],
  imports: [
    CommonModule,
    ProfileMenuRoutingModule,
    SharedModule
  ]
})
export class ProfileMenuModule { }
