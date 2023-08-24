import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CreditService } from 'src/app/services/credit/credit.service';

@Component({
  selector: 'app-depots-list',
  templateUrl: './depots-list.component.html',
  styleUrls: ['./depots-list.component.scss']
})
export class DepotsListComponent {
  page: number = 1;
  //nombre d'element au niveau de la pagination
  count: number = 0;
  tableSize: number = 10;
  filteredCredits: Credit[] = [];
  reachCredit: Credit={
    id: undefined,
    identifiantCredit: '',
    montant: 0,
    dateOperation: 0,
    patientID: undefined,
    status: '',
    patient: ''
  }
  emptyCredit: Credit={
    id: undefined,
    identifiantCredit: '',
    montant: 0,
    dateOperation: 0,
    patientID: undefined,
    status: '',
    patient: ''
  }
  
/*
SEARCH TREATMENT
*/
searchText = '';

  searchForm: FormGroup =new FormGroup({
    identifiantCredit: new FormControl(''),
    montant: new FormControl(0),
    dateOperation: new FormControl(0),
    patientID: new FormControl()
  });
 

  submitted: boolean =false;
  pSearch: SearchCredit={
    id: 0,
    identifiantCredit: '',
    montant: 0,
    dateOperation: 0,
    status: '',
    patientID: undefined,
    patient: ''
  };
  constructor(private creditService : CreditService,private route: ActivatedRoute) {}

  
 


 ngOnInit(): void
  {  

   this.reloadData(1,this.emptyCredit);
  
   
 }



  initSearch()
  {
    this.searchForm.reset()
    this.searchForm.patchValue({
      identifiantCredit: '',
      montant: 0,
      dateOperation: 0,
      patientID:undefined
    });

    this.reloadData(1,this.emptyCredit);
  }
  onRechercheSubmit() 
  {
    this.searchText=""
    
    if (
      this.searchForm.value.identifiantCredit.length==0 &&
      this.searchForm.value.montant==0 &&
      this.searchForm.value.dateOperation ==null
    ) {

     this.searchText="Veuillez saisir au moins un champs svp"
    }
    else {
      this.searchText=''
    

      this.reachCredit=this.searchForm.value as Credit
      this.reachCredit.dateOperation=new Date(this.searchForm.value.dateOperation).getTime();

      this.reloadData(1,this.reachCredit);

    }

    
  }

  /*
      LIST TREATMENT
  */

      
     
    
      reloadData(page:number,credit:Credit)
      {

       

        this.creditService.allCreditsByAdminCaisse(page,credit).subscribe(t=>
          {     
           
            if(t['code'] == 200)
            {
             
              this.count=t['data'].totalCredits 
              this.filteredCredits=t['data'].data
             

    
            }
            else{
              this.filteredCredits=[]
            }
            
            
          })
      }
    
     
      onTableDataChange(event: any) {
    
    
        let searchUser=this.emptyCredit as Credit
    
        this.page = event;
        this.reloadData(this.page,searchUser);
    
    
    
    
    
      }
      onTableSizeChange(event: any): void {
    
        this.tableSize = event.target.value;
        this.page = 1;
        
        
      }
    
}
