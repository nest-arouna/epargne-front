import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DebitService } from 'src/app/services/debit/debit.service';

@Component({
  selector: 'app-encaissements-faire',
  templateUrl: './encaissements-faire.component.html',
  styleUrls: ['./encaissements-faire.component.scss']
})
export class EncaissementsFaireComponent {

  

  searchText = '';
  message = '';
  searchForm: FormGroup =new FormGroup({
    montant: new FormControl(0),
    motif: new FormControl(''),
    patientID: new FormControl(this.route.snapshot.paramMap.get("id")),
    professionnalID: new FormControl(localStorage.getItem('id'))    
  });


  submitted: boolean =false;
  
  constructor(private debitService : DebitService,private route: ActivatedRoute,private router : Router) {}



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
       this.message=" la facturation a reussi"
       setTimeout(() => {        
        this.router.navigate(['/caisses/patients-details',this.route.snapshot.paramMap.get("id")])
       }, 1000);
      }
      else{
        this.message=""
       this.searchText =n['message']
      }
      })
    }
  }






  filteredPatients: any[] = [];
 


  
}
