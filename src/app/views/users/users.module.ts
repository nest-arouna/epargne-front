import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


// Components Routing
import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersProfileComponent } from './users-profile/users-profile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { AccordionModule, AlertModule, AvatarModule, BadgeModule, BreadcrumbModule, ButtonGroupModule, ButtonModule, CardModule, CarouselModule, CollapseModule, DropdownModule, FormModule, GridModule, ListGroupModule, ModalModule, NavModule, PaginationModule, PlaceholderModule, PopoverModule, ProgressModule, SharedModule, SpinnerModule, TableModule, TabsModule, ToastModule, TooltipModule, UtilitiesModule } from '@coreui/angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { IconModule } from '@coreui/icons-angular';
import { WidgetsModule } from '../widgets/widgets.module';
import { UsersCreateComponent } from './users-create/users-create.component';
import { UsersUpdateComponent } from './users-update/users-update.component';
import { PaginationCustomerModule } from '../pagination/pagination-customer.module';

@NgModule({
  imports: [
    CommonModule,
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
    PaginationCustomerModule,
    UsersRoutingModule
  ],
  declarations: [   
   
  UsersListComponent, UsersProfileComponent, UsersCreateComponent, UsersUpdateComponent
    
  ],
})
export class UsersModule {}
