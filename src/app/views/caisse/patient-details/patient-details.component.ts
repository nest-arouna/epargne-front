import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CreditService } from 'src/app/services/credit/credit.service';
import { DebitService } from 'src/app/services/debit/debit.service';
import { PatientServiceService } from 'src/app/services/patient/patient-service.service';
import { calltouchpay } from 'src/assets/js/intouch';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent {
  searchText = '';
  message = '';
  searchForm: FormGroup =new FormGroup({
    montant: new FormControl(0),
    motif: new FormControl(''),
    patientID: new FormControl(this.route.snapshot.paramMap.get("id")),
    professionnalID: new FormControl(localStorage.getItem('id'))    
  });

  submitted: boolean =false;
  

  filteredPatients: any[] = [];
 

  imgContext = { $implicit: 'top', bottom: 'bottom' };
  messageError="";

  credit : Credit={
    id: undefined,
    identifiantCredit: '',
    montant: 0,
    dateOperation: 0,
    patientID: this.route.snapshot.paramMap.get("id"),
    status: '',
    patient: '',
    dateOperationFin: 0
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



  constructor(private creditService:CreditService,private patientService : PatientServiceService,private debitService : DebitService,private route: ActivatedRoute) {}



  ngOnInit(): void {
    const patientID=this.route.snapshot.paramMap.get("id");

    this.patientService.getCompteByID(patientID).subscribe(h=>
    {

      if(h['code'] == 200)
      {
        this.dataHome=h['data']
        this.filteredPatients=h['data'].data

      }
    })
  }



 
  submitDebit() {
    this.searchText=""
    
    if (
      this.searchForm.value.montant ==0 ||
      this.searchForm.value.motif.length == 0
    ) {

     this.searchText="Veuillez  renseigner tous  les champs svp"
    }
    else {
      this.searchText=''
      this.message=""
      this.debitService.createDebit(this.searchForm.value).subscribe(n=>{

      if(n['code'] == 200)
      {
        this.searchText=''
       this.message=" la facturation a reussi"
       setTimeout(() => {
        location.reload()
       }, 1000);
      }
      else{
        this.message=""
       this.searchText =n['message']
      }
      })
    }
  }
  depositeSum()
  { 
    
      if(this.createForm.value.amount != 0)
      {
        this.credit.montant= this.createForm.value.amount,
        this.credit.dateOperation=new Date().getTime(),
        this.credit.identifiantCredit=environment.order_number +this.credit.dateOperation.toString(),
        this.credit.patientID=this.route.snapshot.paramMap.get("id"),
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

