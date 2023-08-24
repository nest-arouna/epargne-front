import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepotsListComponent } from './depots-list/depots-list.component';
import { DepotsDetailsComponent } from './depots-details/depots-details.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Facturations',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'depots',
      },
      {
        path: 'depots',
        component:DepotsListComponent ,
        data: {
          title: 'facturations',
        },
      },
      {
        path: 'depots-detail/:id',
        component:DepotsDetailsComponent ,
        data: {
          title: 'Détails facturations',
        },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepotsRoutingModule {}

