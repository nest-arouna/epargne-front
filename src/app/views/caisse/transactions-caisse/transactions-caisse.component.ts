import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditService } from 'src/app/services/credit/credit.service';

declare var $: any;

@Component({
  selector: 'app-transactions-caisse',
  templateUrl: './transactions-caisse.component.html',
  styleUrls: ['./transactions-caisse.component.scss']
})
export class TransactionsCaisseComponent implements OnInit {
  page: number = 1;
  //nombre d'element au niveau de la pagination
  count: number = 0;
  tableSize: number = 10;
  
  @Input() isDashboard:boolean =false
  filteredCredits: Credit[] = [];
  reachCredit: Credit={
    id: undefined,
    identifiantCredit: '',
    montant: 0,
    dateOperation: 0,
    patientID: this.route.snapshot.paramMap.get("id"),
    status: '',
    patient: '',
    dateOperationFin: 0
  }
  emptyCredit: Credit={
    id: undefined,
    identifiantCredit: '',
    montant: 0,
    dateOperation: 0,
    patientID: this.route.snapshot.paramMap.get("id"),
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
    montant: new FormControl(0),
    dateOperation: new FormControl(0),
    dateOperationFin: new FormControl(0),
    patientID: new FormControl(this.route.snapshot.paramMap.get("id"))
  });
 

  submitted: boolean =false;
  pSearch: SearchCredit={
    id: 0,
    identifiantCredit: '',
    montant: 0,
    dateOperation: 0,
    status: '',
    patientID: this.route.snapshot.paramMap.get("id"),
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
      identifiantCredit: '',
     montant: 0,
     dateOperation: 0,
     dateOperationFin: 0,
     status: '',
     patientID: this.route.snapshot.paramMap.get("id")
    })
    this.searchText=''
    this.reloadData(1,this.emptyCredit);


  }
  onRechercheSubmit() 
  {
    this.searchText=""
    
    if (
      this.searchForm.value.identifiantCredit.length==0 &&
      this.searchForm.value.montant==0 &&
      this.searchForm.value.dateOperation ==0 &&

      this.searchForm.value.dateOperatioFin ==0
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
        this.page = event;
        this.reloadData(this.page,searchUser); 
    
    
    
    
      }
      onTableSizeChange(event: any): void {
    
        this.tableSize = event.target.value;
        this.page = 1;
        
        
      }
    
}
