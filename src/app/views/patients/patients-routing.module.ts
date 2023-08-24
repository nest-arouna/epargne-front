import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsProfileComponent } from './patients-profile/patients-profile.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { DashboardPatientComponent } from './dashboard-patient/dashboard-patient.component';
import { DetailTransactionComponent } from './detail-transaction/detail-transaction.component';
import { FacturationsPatientComponent } from './facturations/facturations-patient.component';
import { DetailFacturationComponent } from './detail-facturation/detail-facturation.component';
import { PatientsCreateComponent } from './patients-create/patients-create.component';
import { FacturationsFaireComponent } from './facturations-faire/facturations-faire.component';
import { PatientsUpdateComponent } from './patients-update/patients-update.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SuccessComponent } from './success/success.component';
import { FailedComponent } from './failed/failed.component';
import { PatientsDetailsComponent } from './patients-details/patients-details.component';
import { patientGuard } from '../../services/patient/guard/patient.guard';

const routes: Routes = [
  {
    path: '',
   canActivate: [patientGuard],
    data: {
      title: 'Patients',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'accueil',
      },
      {
        path: 'accueil',
        component:DashboardPatientComponent ,
        data: {
          title: 'Accueil',
        },
      },
      {
        path: 'patients-list',
        component:PatientsListComponent ,
        data: {
          title: 'Liste patients',
        },
      },
      {
        path: 'facturations',
        component:FacturationsPatientComponent ,
        data: {
          title: 'Mes Facturations',
        },
      }
      ,
      {
        path: 'success',
        component: SuccessComponent,
        data: {
          title: 'Transaction reussi'
        }
      },
      {
        path: 'failed',
        component: FailedComponent,
        data: {
          title: 'Echec de transaction'
        }
      }
      ,
      {
        path: 'patients-update/:id',
        component:PatientsUpdateComponent ,
        data: {
          title: 'Mise à jour patient',
        },
      },
      {
        path: 'facturations-faire/:id',
        component:FacturationsFaireComponent ,
        data: {
          title: 'Faire facturation',
        },
      },
      {
        path: 'transactions-detail/:id',
        component:DetailTransactionComponent ,
        data: {
          title: 'Détails transaction',
        },
      },
      {
        path: 'patients-create',
        component:PatientsCreateComponent ,
        data: {
          title: 'Ajouter patient',
        },
      },
      {
        path: 'facturation-detail/:id',
        component:DetailFacturationComponent ,
        data: {
          title: 'Détails facturation',
        },
      },
      {
        path: 'patients-transactions',
        component:TransactionsComponent ,
        data: {
          title: 'Liste des dépots',
        },
      },
      {
        path: 'patients-profile',
        component:PatientsProfileComponent ,
        data: {
          title: 'Mon profil',
        },
      },
      {
        path: 'patients-details/:id',
        component:PatientsDetailsComponent ,
        data: {
          title: 'Mon profil',
        },
      },
      {
        path: 'historiques',
        component:PatientsListComponent ,
        data: {
          title: 'Historiques',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}

