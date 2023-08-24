import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientServiceService } from 'src/app/services/patient/patient-service.service';
import { environment } from 'src/environments/environment';
import { CreditService } from 'src/app/services/credit/credit.service';
import {calltouchpay } from 'src/assets/js/intouch.js';
export enum Colors {
  '' = '',
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  info = 'info',
  warning = 'warning',
  danger = 'danger',
  dark = 'dark',
  light = 'light',
}


@Component({
  templateUrl: 'dashboard-patient.component.html',
  styleUrls: ['dashboard-patient.component.scss']
})
export class DashboardPatientComponent implements OnInit {
  filteredCredits: any[] = [];
 

  imgContext = { $implicit: 'top', bottom: 'bottom' };
  messageError="";

  credit : Credit={
    id: undefined,
    identifiantCredit: '',
    montant: 0,
    dateOperation: 0,
    patientID: localStorage.getItem('id'),
    status: '',
    patient: ''
  }



  dataHome:any={};
   createForm: FormGroup =new FormGroup({
    order_number: new FormControl(),
    agency_code: new FormControl(environment.agence_code),
    secure_code: new FormControl(environment.secure_code),
    domain_name: new FormControl(environment.domaine),
    url_redirection_success: new FormControl(environment.url_redirection_success),
    url_redirection_failed: new FormControl(environment.url_redirection_failed),
    amount:new FormControl('', Validators.required),
    city: new FormControl('Dakar'),
    email: new FormControl(localStorage.getItem('email')),
    clientFirstName: new FormControl(localStorage.getItem('firstname')),
    clientLastName: new FormControl(localStorage.getItem('lastname')),
    clientPhone: new FormControl(localStorage.getItem('phone'))
  });
  constructor(private patientService : PatientServiceService,private creditService:CreditService) { }




  ngOnInit(): void 
  {

    const patientID=localStorage.getItem('id');

    this.patientService.getCompteByID(patientID).subscribe(h=>
    {
      if(h['code'] == 200)
      {
        this.dataHome=h['data']
        this.filteredCredits=h['data'].data
      }
    })

  
   
  }


depositeSum()
{ 
  
    if(this.createForm.value.amount != 0)
    {
      this.credit.montant= this.createForm.value.amount,
      this.credit.dateOperation=new Date().getTime(),
      this.credit.identifiantCredit=environment.order_number +this.credit.dateOperation.toString(),
      this.credit.patientID=localStorage.getItem('id'),
     this.creditService.createCredit(this.credit).subscribe(p=>
        {
          if(p['code'] == 200)
          {
            const creditID=p['data'].id
           
            localStorage.setItem("creditID",creditID)
            calltouchpay(
              this.credit.identifiantCredit,
              this.createForm.value.agency_code,
              this.createForm.value.secure_code,
              this.createForm.value.domain_name,
              environment.url_redirection_success,
              environment.url_redirection_failed,
              this.createForm.value.amount,
              this.createForm.value.city,
              this.createForm.value.email,
              this.createForm.value.clientFirstName,
              this.createForm.value.clientLastName,
              this.createForm.value.clientPhone)   
          }
          else
         {
           this.messageError=p['message'];
          
    
         }
    
       }) 

      
    }
    else
    {

      this.messageError="Veuillez renseigner le montant svp";
    }


  
} 

 
  
}
