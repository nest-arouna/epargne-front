import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { adminGuard } from './services/account/guard/admin.guard';
import { patientGuard } from './services/patient/guard/patient.guard';
import { caisseGuard } from './services/account/guard/caisse.guard';
import { ForgotpwdComponent } from './views/pages/forgotpwd/forgotpwd.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Acceuil'
    },
    children: [
      {
        path: 'dashboard',
        canActivate:[adminGuard], 
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'patients',
        canActivate:[patientGuard],
        loadChildren: () =>
          import('./views/patients/patients.module').then((m) => m.PatientsModule)
      },
      {
        path: 'facturations',
        canActivate:[adminGuard],
        loadChildren: () =>
          import('./views/facturations/facturations.module').then((m) => m.FacturationsModule)
      }, 
      {
        path: 'depots',
        canActivate:[adminGuard],
        loadChildren: () =>
          import('./views/depots/Depots.module').then((m) => m.DepotsModule)
      },     
      {
        path: 'users',
        canActivate:[adminGuard],
        loadChildren: () =>
          import('./views/users/users.module').then((m) => m.UsersModule)
      },
      {
        path: 'caisses',
        canActivate:[caisseGuard],
        loadChildren: () =>
          import('./views/caisse/caisse.module').then((m) => m.CaisseModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
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
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'forgot',
    component: ForgotpwdComponent,
    data: {
      title: 'Forgot password'
    }
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
       {
        useHash: true,
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
