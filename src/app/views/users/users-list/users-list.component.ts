import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AccountServiceService } from 'src/app/services/account/account-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit{
  page: number = 1;
  //nombre d'element au niveau de la pagination
  count: number = 0;
  tableSize: number = 10;
  filteredProfionnnals: User[] = [];
  reachUser: User = {
    id: undefined,
    lastname: '',
    firstname: '',
    adress: '',
    email: '',
    password: '',
    token: '',
    typeOfUser: '',
    phone: '',
    birthDay: 0,
    status: false,
    role: '',
    identification_code: '',
    url_supported: '',
    assurance: '',
    solde: 0
  };
  emptyUser: User = {
    id: undefined,
    lastname: '',
    firstname: '',
    adress: '',
    email: '',
    password: '',
    token: '',
    typeOfUser: '',
    phone: '',
    birthDay: 0,
    status: false,
    role: '',
    identification_code: '',
    url_supported: '',
    assurance: '',
    solde: 0
  };
/*
SEARCH TREATMENT
*/
searchText = '';

  searchForm: FormGroup =new FormGroup({
    lastname: new FormControl(''),
    firstname: new FormControl(''),
    adress: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('')
  });


  submitted: boolean =false;
  pSearch: SearchUser= {
    id: undefined,
    lastname: '',
    firstname: '',
    adress: '',
    email: '',
    password: '',
    token: '',
    typeOfUser: '',
    phone: '',
    birthDay: 0,
    status: false,
    role: '',
    identification_code: '',
    url_supported: '',
    assurance: '',
    solde: 0
  };
  constructor(private accountService : AccountServiceService) {}

  
 


 ngOnInit(): void
  {  

   this.reloadData(1,this.emptyUser);
  
   
 }



  initSearch()
  {
    this.searchForm.reset()
    this.searchForm.patchValue({
      lastname: '',
      firstname: '',
      adress: '',
      email: '',
      phone: ''
    });
    this.reloadData(1,this.emptyUser);
  }
  onRechercheSubmit() 
  {
    this.searchText=""
    if (
      this.searchForm.value.lastname.length==0 &&
      this.searchForm.value.firstname.length==0 &&
      this.searchForm.value.adress.length==0 &&
      this.searchForm.value.email.length==0 &&
      this.searchForm.value.phone.length==0
    ) {

     this.searchText="Veuillez saisir au moins un champs svp"
    }
    else {
      this.searchText=''
      this.reachUser=this.searchForm.value as User
      this.reloadData(1,this.reachUser);

    }

    
  }

  /*
      LIST TREATMENT
  */

      
     
    
      reloadData(page:number,user:User)
      {
        this.accountService.allProfessionnals(page,user).subscribe(t=>
          {     
           
            if(t['code'] == 200)
            {
             
              this.count=t['data'].totalUsers 
              this.filteredProfionnnals=t['data'].data
    
    
            }
            else{
              this.filteredProfionnnals=[]
            }
            
            
          })
      }
    
     
      onTableDataChange(event: any) {
    
    
        let searchUser=this.pSearch as User
    
        this.page = event;
        this.reloadData(this.page,searchUser);
    
    
    
    
    
      }
      onTableSizeChange(event: any): void {
    
        this.tableSize = event.target.value;
        this.page = 1;
        
        
      }
    
  
 
}
