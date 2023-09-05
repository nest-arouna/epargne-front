import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IgxCsvExporterService, IgxCsvExporterOptions, CsvFileTypes } from 'igniteui-angular';
import { DebitService } from 'src/app/services/debit/debit.service';

@Component({
  selector: 'app-facturations-admin',
  templateUrl: './facturations-admin.component.html',
  styleUrls: ['./facturations-admin.component.scss']
})
export class FacturationsAdminComponent {

  patientID :any = this._Activatedroute.snapshot.paramMap.get('id'); 

  page: number = 1;
  //nombre d'element au niveau de la pagination
  count: number = 0;


  filteredDebits: any[] = [];
  reachCredit: Debit={
    id: undefined,
    motif: '',
    montant: 0,
    dateOperation: 0,
    patientID: this.patientID,
    professionnalID: '',
    status: '',
    dateOperationFin: 0
  }
  emptyCredit: Debit={
    id: undefined,
    motif: '',
    montant: 0,
    dateOperation: 0,
    patientID: this.patientID,
    professionnalID: '',
    status: '',
    dateOperationFin: 0
  }
  SearchFilter:any;
/*
SEARCH TREATMENT
*/
searchText = '';

  searchForm: FormGroup =new FormGroup({
    motif: new FormControl(''),
    montant: new FormControl(0),
    dateOperation: new FormControl(0),
    status: new FormControl(''),
    patientID: new FormControl(this.patientID)
  });
 

  submitted: boolean =false;
  pSearch: SearchDebit={
    id: undefined,
    motif: '',
    montant: 0,
    dateOperation: 0,
    patientID: this.patientID,
    professionnalID: '',
    status: '',
    dateOperationFin: 0
  };
  constructor(private debitService : DebitService,private csvExportService: IgxCsvExporterService ,private _Activatedroute :ActivatedRoute) {}

  

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
      this.searchForm.value.motif.length == 0 &&
      this.searchForm.value.status.length == 0 &&
      this.searchForm.value.montant==0 &&
      this.searchForm.value.dateOperation ==0
    ) {

     this.searchText="Veuillez saisir au moins un champs svp"
    }
    else {
      this.searchText=''
      this.reachCredit=this.searchForm.value as Debit
      this.reachCredit.dateOperation=new Date(this.searchForm.value.dateOperation).getTime();
      this.reloadData(1,this.reachCredit);

    }

    
  }

  /*
      LIST TREATMENT
  */

      
     
    
      reloadData(page:number,debit:Debit)
      {

       

        this.debitService.allDebitByPatients(page,debit).subscribe(t=>
          {     

            if(t['code'] == 200)
            {
              this.count=t['data'].totalCredits 
              this.filteredDebits=t['data'].data

            }
            else{
              this.filteredDebits=[]
            }
            
            
          })
      }
    
     
      onTableDataChange(event: any) {
    
    
        let searchUser=this.pSearch as Debit
    
        this.page = event;
        this.reloadData(this.page,searchUser);
    
    
    
    
      }
      


  public exportCsvButtonHandler() {
    const opt: IgxCsvExporterOptions = new IgxCsvExporterOptions('CSVExportFileFromData', CsvFileTypes.CSV);
    this.csvExportService.exportData(this.filteredDebits, opt);
  }

  public exportTsvButtonHandler() {
    const opt: IgxCsvExporterOptions = new IgxCsvExporterOptions('CSVExportFileFromData', CsvFileTypes.TSV);
    this.csvExportService.exportData(this.filteredDebits, opt);
  }
  annuler()
  {
    this.reloadData(1,this.emptyCredit);
  }
}
