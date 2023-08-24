import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { PatientsUpdateComponent } from './patients-update/patients-update.component';
import { PatientsCreateComponent } from './patients-create/patients-create.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { PatientsDashboardComponent } from './patients-dashboard/patients-dashboard.component';
import { EncaissementsComponent } from './encaissements/encaissements.component';
import { EncaissementsFaireComponent } from './encaissements-faire/encaissements-faire.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { caisseGuard } from '../../services/account/guard/caisse.guard';

const routes: Routes = [
  {
    path: '',
    canActivate:[caisseGuard],
    data: {
      title: 'Patients',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'patients-list',
        component: PatientsListComponent, 
        data: {
          title: 'Liste patients',
        },
      },
      {
        path: 'dashboard',
        component: PatientsDashboardComponent,
        data: {
          title: 'Dashboard',
        },
      },
      {
        path: 'patients-create',
        component: PatientsCreateComponent,
        data: {
          title: 'Ajouter patient',
        },
      },
      {
        path: 'patients-details/:id',
        component: PatientDetailsComponent,
        data: {
          title: 'détails patient',
        },
      },
      {
        path: 'patients-update/:id',
        component: PatientsUpdateComponent,
        data: {
          title: 'Modifier patient',
        },
      },
      {
        path: 'encaissements',
        component: EncaissementsComponent,
        data: {
          title: 'Mes encaissements',
        },
      },
      {
        path: 'encaissements-faire/:id',
        component: EncaissementsFaireComponent,
        data: {
          title: 'Faire encaissements',
        },
      },
      {
        path: 'profile',
        component: ProfilComponent,
        data: {
          title: 'Mon Profil',
        },
      },
      
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaisseRoutingModule { }
