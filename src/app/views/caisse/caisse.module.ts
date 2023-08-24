import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaisseRoutingModule } from './caisse-routing.module';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { PatientsCreateComponent } from './patients-create/patients-create.component';
import { EncaissementsComponent } from './encaissements/encaissements.component';
import { ProfilComponent } from './profil/profil.component';
import { PatientsUpdateComponent } from './patients-update/patients-update.component';
import { PatientsDashboardComponent } from './patients-dashboard/patients-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonGroupModule, AvatarModule, AccordionModule, BreadcrumbModule, CollapseModule, SharedModule, ListGroupModule, PlaceholderModule, SpinnerModule, TabsModule, NavModule, CarouselModule, DropdownModule, PaginationModule, TableModule, AlertModule, GridModule, CardModule, BadgeModule, ButtonModule, FormModule, ModalModule, ToastModule, UtilitiesModule, TooltipModule, PopoverModule, ProgressModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { IconModule } from '@coreui/icons-angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { WidgetsModule } from '../widgets/widgets.module';
import { EncaissementsFaireComponent } from './encaissements-faire/encaissements-faire.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

import { TransactionsCaisseComponent } from './transactions-caisse/transactions-caisse.component';
import { FacturationsCaisseComponent } from './facturations-caisse/facturations-caisse.component';
import { PaginationCustomerModule } from '../pagination/pagination-customer.module';

@NgModule({
  declarations: [
    PatientsListComponent,
    PatientsCreateComponent,
    EncaissementsComponent,
    TransactionsCaisseComponent,
    FacturationsCaisseComponent,
    ProfilComponent,
    PatientsUpdateComponent,
    PatientsDashboardComponent,
    EncaissementsFaireComponent,
    PatientDetailsComponent
  ],
  imports: [
    CommonModule,
    PaginationCustomerModule,
    MatDialogModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,           
    WidgetsModule,
    NgxPaginationModule,
    HttpClientModule,
    AccordionModule,
    BreadcrumbModule, 
     CollapseModule,  
    SharedModule,
     ListGroupModule,
    PlaceholderModule,
    SpinnerModule,
    TabsModule,
    NavModule,
    CarouselModule,
    DropdownModule,
    PaginationModule,
    TableModule,
    ReactiveFormsModule,
    AlertModule,
    GridModule,
    CardModule,
    BadgeModule,
    ButtonModule,
    FormModule,
    ModalModule,
    ToastModule,
    UtilitiesModule,
    TooltipModule,
    PopoverModule,
    ProgressModule,
    MatDialogModule,
    IconModule,
    DocsComponentsModule,
    CaisseRoutingModule
  ]
})
export class CaisseModule { }
