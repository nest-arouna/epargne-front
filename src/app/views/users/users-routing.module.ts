import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersProfileComponent } from './users-profile/users-profile.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersUpdateComponent } from './users-update/users-update.component';
import { adminGuard } from '../../services/account/guard/admin.guard';


const routes: Routes = [
  {
    path: '',
    canActivate:[adminGuard],
    data: {
      title: 'Utilisateurs',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users',
      },
      {
        path: 'users-list',
        component: UsersListComponent,
        data: {
          title: 'Liste utilisateurs',
        },
      },
      {
        path: 'users-create',
        component: UsersCreateComponent,
        data: {
          title: 'Ajouter utilisateur',
        },
      },
      {
        path: 'users-update/:id',
        component: UsersUpdateComponent,
        data: {
          title: 'Modifier utilisateur',
        },
      },
      {
        path: 'users-profile',
        component: UsersProfileComponent,
        data: {
          title: 'Mon Profil',
        },
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}

