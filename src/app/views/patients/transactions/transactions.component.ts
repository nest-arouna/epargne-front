import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditService } from 'src/app/services/credit/credit.service';
import { environment } from 'src/environments/environment';

declare var $: any;

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit{
  page: number = 1;
  //nombre d'element au niveau de la pagination
  count: number = 0;
  tableSize: number = 10;
  patientID=(!!localStorage.getItem('type') 
  && localStorage.getItem('type') == environment.TYPE_PROFESSIONNAL) 
  ? this.route.snapshot.paramMap.get("id")
  :localStorage.getItem('id')


  
  @Input() isDashboard:boolean =false
  filteredCredits: Credit[] = [];
  reachCredit: Credit={
    id: undefined,
    identifiantCredit: '',
    montant: 0,
    dateOperation: 0,
    patientID: this.patientID,
    status: '',
    patient: '',
    dateOperationFin: 0
  }
  emptyCredit: Credit={
    id: undefined,
    identifiantCredit: '',
    montant: 0,
    dateOperation: 0,
    patientID: this.patientID,
    status: '',
    patient: '',
    dateOperationFin: 0
  }
  
/*
SEARCH TREATMENT
*/
searchText = '';

  searchForm: FormGroup =new FormGroup({
    identifiantCredit: new FormControl(),
    montant: new FormControl(),
    dateOperationFin: new FormControl(0),
    dateOperation: new FormControl(0),
    patientID: new FormControl(this.patientID)
  });
 

  submitted: boolean =false;
  pSearch: SearchCredit={
    id: 0,
    identifiantCredit: '',
    montant: 0,
    dateOperation: 0,
    status: '',
    patientID: this.patientID,
    patient: '',
    dateOperationFin: 0
  };
  constructor(private router:Router,private creditService : CreditService,private route: ActivatedRoute) {}
 

 ngOnInit(): void
  {  

   this.reloadData(1,this.emptyCredit);
  
   
 }



  initSearch()
  {
    this.searchForm.reset()
    this.searchForm.patchValue({
     motif: '',
     montant: 0,
     dateOperation: 0,
     dateOperationFin: 0,
     status: '',
     patientID: this.patientID
    })
    this.searchText=''
    this.reloadData(1,this.emptyCredit);


  }
  onRechercheSubmit() 
  {
    this.searchText=""
    
    if (
      this.searchForm.value.identifiantCredit != null &&
      this.searchForm.value.identifiantCredit.length==0 &&
      this.searchForm.value.montant==0 &&
      this.searchForm.value.dateOperation ==0 &&
      this.searchForm.value.dateOperationFin ==0
    ) {
     
     this.searchText="Veuillez saisir au moins un champs svp"
    }
    else {
      this.searchText=''
    
      this.reachCredit=this.searchForm.value as Credit
      this.reachCredit.dateOperation=new Date(this.searchForm.value.dateOperation).getTime();
      this.reachCredit.dateOperationFin=new Date(this.searchForm.value.dateOperationFin).getTime();
      this.reloadData(1,this.reachCredit);

    }

    
  }

  /*
      LIST TREATMENT
  */

      
     
    
      reloadData(page:number,credit:Credit)
      {




        this.creditService.allCredits(page,credit).subscribe(t=>
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
    
        let searchUser=this.pSearch as Credit 
        searchUser.dateOperation=new Date(this.pSearch.dateOperation).getTime();
        searchUser.dateOperationFin=new Date(this.pSearch.dateOperationFin).getTime();   
        this.page =( event != 0)? event : 1;
        this.reloadData(this.page,searchUser);
    
    
    
    
    
      }
      onTableSizeChange(event: any): void {
    
        this.tableSize = event.target.value;
        this.page = 1;
        
        
      }
    
}
