import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule, ModalModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { ChangepwdUserComponent } from './changepwd-user/changepwd-user.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    ForgotpwdComponent,
    ChangepwdComponent,
    ChangepwdUserComponent
   
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ReactiveFormsModule,
    ButtonModule,
    ModalModule,
    GridModule,
    IconModule,
    FormModule
  ],
  exports:[ChangepwdComponent]
})
export class PagesModule {
}
