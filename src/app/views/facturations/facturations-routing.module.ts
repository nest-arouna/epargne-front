import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturationsDetailComponent } from './facturations-detail/facturations-detail.component';
import { FacturationsComponent } from './facturations/facturations.component';
import { adminGuard } from 'src/app/services/account/guard/admin.guard';

const routes: Routes = [
  {
    path: '',
    canActivate:[adminGuard],
    data: {
      title: 'Facturations',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'facturations',
      },
      {
        path: 'facturations-list',
        component:FacturationsComponent ,
        data: {
          title: 'facturations',
        },
      },
      
      {
        path: 'facturations-detail/:id',
        component:FacturationsDetailComponent ,
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
export class FacturationsRoutingModule {}

