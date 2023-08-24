import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CsvFileTypes, IgxCsvExporterOptions, IgxCsvExporterService } from 'igniteui-angular';
import { DebitService } from 'src/app/services/debit/debit.service';
import 'src/app/models/debit'
@Component({
  selector: 'app-facturations',
  templateUrl: './facturations.component.html',
  styleUrls: ['./facturations.component.scss']
})
export class FacturationsComponent {
  page: number = 1;
  //nombre d'element au niveau de la pagination
  count: number = 0;
  totalGeneral:number=0;
  totalFiltered:number=0;
  tableSize: number = 10;
  filteredDebits: any[] = [];
  reachCredit: Debit={
    id: undefined,
    motif: '',
    montant: 0,
    dateOperation: 0,
    patientID: localStorage.getItem("id"),
    professionnalID: '',
    status: ''
  }
  emptyCredit: Debit={
    id: undefined,
    motif: '',
    montant: 0,
    dateOperation: 0,
    patientID: localStorage.getItem("id"),
    professionnalID: '',
    status: ''
  }
/*
SEARCH TREATMENT
*/
searchText = '';

  searchForm: FormGroup =new FormGroup({
    motif: new FormControl(''),
    montant: new FormControl(0),
    dateOperation: new FormControl(0),
    status: new FormControl(''),
    patientID: new FormControl(localStorage.getItem("id"))
  });
 

  submitted: boolean =false;
  pSearch: SearchDebit={
    id: undefined,
    motif: '',
    montant: 0,
    dateOperation: 0,
    patientID: localStorage.getItem("id"),
    professionnalID: '',
    status: ''
  };
  constructor(private debitService : DebitService,private csvExportService: IgxCsvExporterService ) {}

  

  ngOnInit(): void
  {  

   this.reloadData(1,this.emptyCredit);
  
   
 }



  initSearch()
  {
    this.searchForm.reset()
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

       

        this.debitService.allDebits(page,debit).subscribe(t=>
          {     
           

            if(t['code'] == 200)
            {
              this.count=t['data'].totalCredits 
              this.filteredDebits=t['data'].data
              this.totalFiltered=t['data'].totalFiltered
              this.totalGeneral=t['data'].totalGeneral
    
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
      onTableSizeChange(event: any): void {
    
        this.tableSize = event.target.value;
        this.page = 1;
        
        
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
    window.location.reload()
  }
}
