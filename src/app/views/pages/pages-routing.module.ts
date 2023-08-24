import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { ChangepwdUserComponent } from './changepwd-user/changepwd-user.component';
import { adminGuard } from 'src/app/services/account/guard/admin.guard';


const routes: Routes = [
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'forgot',
    component: ForgotpwdComponent,
    data: {
      title: 'Forgot password'
    }
  },
  {
    path: 'updatepwd',
    component: ChangepwdComponent,
    data: {
      title: 'update password'
    }
  },
  {
    path: 'updatepwduser/:id',
    canActivate:[adminGuard],
    component: ChangepwdUserComponent,
    data: {
      title: 'update password by admin'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
