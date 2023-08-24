import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Import routing module
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, BadgeModule, BreadcrumbModule, ButtonModule, CardModule, CollapseModule, GridModule, UtilitiesModule, SharedModule, ListGroupModule, PlaceholderModule, ProgressModule, SpinnerModule, TabsModule, NavModule, TooltipModule, CarouselModule, FormModule, DropdownModule, PaginationModule, PopoverModule, TableModule, AvatarModule, ButtonGroupModule, AlertModule, ModalModule, ToastModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { WidgetsModule } from '../widgets/widgets.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DepotsRoutingModule } from './Depots-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { IgxCsvExporterService } from "igniteui-angular";
import { DepotsListComponent } from './depots-list/depots-list.component';
import { DepotsDetailsComponent } from './depots-details/depots-details.component';
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
    DepotsRoutingModule,
    PaginationCustomerModule,
    IconModule
    ],
  declarations: [    
    DepotsDetailsComponent,
    DepotsListComponent
    ],
  providers: [IgxCsvExporterService],
})
export class DepotsModule {}
