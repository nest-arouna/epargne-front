import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CardModule, FormModule, GridModule, ModalModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationCustomerComponent } from './pagination-customer.component'

@NgModule({
  declarations: [
    PaginationCustomerComponent
   
  ],
  imports: [
    CommonModule,
    CardModule,
    ReactiveFormsModule,
    ButtonModule,
    ModalModule,
    GridModule,
    IconModule,
    FormModule
  ],
  exports:[ PaginationCustomerComponent]
})
export class PaginationCustomerModule {
}
