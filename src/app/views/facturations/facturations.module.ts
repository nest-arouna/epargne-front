import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Import routing module
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, BadgeModule, BreadcrumbModule, ButtonModule, CardModule, CollapseModule, GridModule, UtilitiesModule, SharedModule, ListGroupModule, PlaceholderModule, ProgressModule, SpinnerModule, TabsModule, NavModule, TooltipModule, CarouselModule, FormModule, DropdownModule, PaginationModule, PopoverModule, TableModule, AvatarModule, ButtonGroupModule, AlertModule, ModalModule, ToastModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FacturationsDetailComponent } from './facturations-detail/facturations-detail.component';
import { FacturationsComponent } from './facturations/facturations.component';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { WidgetsModule } from '../widgets/widgets.module';
import { FacturationsRoutingModule } from './facturations-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { IgxCsvExporterService } from "igniteui-angular";
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
    DocsComponentsModule,
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
    FacturationsRoutingModule,
    PaginationCustomerModule,
    IconModule
    ],
  declarations: [    
    FacturationsDetailComponent,
    FacturationsComponent
  ],
  providers: [IgxCsvExporterService],
})
export class FacturationsModule {}
