import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DebitService } from 'src/app/services/debit/debit.service';

@Component({
  selector: 'app-facturations-faire',
  templateUrl: './facturations-faire.component.html',
  styleUrls: ['./facturations-faire.component.scss']
})
export class FacturationsFaireComponent {

 
  

  searchText = '';
  message = '';
  searchForm: FormGroup =new FormGroup({
    montant: new FormControl(0),
    motif: new FormControl(''),
    patientID: new FormControl(this.route.snapshot.paramMap.get("id")),
    professionnalID: new FormControl(localStorage.getItem('id'))    
  });


  submitted: boolean =false;
  
  constructor(private debitService : DebitService,private route: ActivatedRoute,private router:Router) {}



  ngOnInit(): void {
   
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
        this.searchForm.patchValue({
          montant:0,
          motif: '',
        })
       this.message=" la facturation a reussi"
       setTimeout(() => {
        this.router.navigate(['/patients/patients-details',this.route.snapshot.paramMap.get("id")])
        this.message=""
       }, 1000);
      }
      else
      {
        this.message=""
       this.searchText =n['message']
      }
      })
    }
  }






  filteredPatients: any[] = [];
 


  
  
}
