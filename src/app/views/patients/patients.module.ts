import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { PatientsProfileComponent } from './patients-profile/patients-profile.component';
import { HttpClientModule } from '@angular/common/http';
// Import routing module
import { PatientsRoutingModule } from './patients-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, BadgeModule, BreadcrumbModule, ButtonModule, CardModule, CollapseModule, GridModule, UtilitiesModule, SharedModule, ListGroupModule, PlaceholderModule, ProgressModule, SpinnerModule, TabsModule, NavModule, TooltipModule, CarouselModule, FormModule, DropdownModule, PaginationModule, PopoverModule, TableModule, AvatarModule, ButtonGroupModule, AlertModule, ModalModule, ToastModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { TransactionsComponent } from './transactions/transactions.component';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { WidgetsModule } from '../widgets/widgets.module';
import { DashboardPatientComponent } from './dashboard-patient/dashboard-patient.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailTransactionComponent } from './detail-transaction/detail-transaction.component';
import { FacturationsPatientComponent } from './facturations/facturations-patient.component';
import { DetailFacturationComponent } from './detail-facturation/detail-facturation.component';
import { PatientsCreateComponent } from './patients-create/patients-create.component';
import { FacturationsFaireComponent } from './facturations-faire/facturations-faire.component';
import { PatientsUpdateComponent } from './patients-update/patients-update.component';
import {MatSelectModule} from '@angular/material/select';
import { FailedComponent } from './failed/failed.component';
import { SuccessComponent } from './success/success.component';
import { PatientsDetailsComponent } from './patients-details/patients-details.component';
import { FacturationsAdminComponent } from './facturations-admin/facturations-admin.component';
import { PaginationCustomerModule } from '../pagination/pagination-customer.module';
// views

@NgModule({
  imports: [
    CommonModule, 
    MatDialogModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,  
    IconModule,         
    WidgetsModule,
    NgxPaginationModule,
    HttpClientModule,
    AccordionModule,
    BreadcrumbModule, 
     CollapseModule,
    GridModule,   
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
    MatSelectModule,
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
    DocsComponentsModule,
    PatientsRoutingModule,   
    PaginationCustomerModule,


    
    ],
  declarations: [    
    SuccessComponent,
    FailedComponent,
    PatientsListComponent,
    PatientsProfileComponent,
    DashboardPatientComponent,
    TransactionsComponent,
    DetailTransactionComponent,
    FacturationsPatientComponent,
    DetailFacturationComponent,
    PatientsCreateComponent,
    FacturationsFaireComponent,
    PatientsUpdateComponent,
    PatientsDetailsComponent,
    FacturationsAdminComponent
  ],
})
export class PatientsModule {}
