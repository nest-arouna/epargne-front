import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditService } from 'src/app/services/credit/credit.service';

@Component({
  selector: 'app-failed',
  templateUrl: './failed.component.html',
  styleUrls: ['./failed.component.scss']
})
export class FailedComponent {
  message:String=""
  patientID:any

  constructor(private creditService : CreditService,private _Activatedroute: ActivatedRoute , private router : Router) { }
  ngOnInit(): void {
    var id=localStorage.getItem("creditID")
    this.patientID=localStorage.getItem("id")

     if(!!id)
     {
      this.creditService.failedCreditbyID(id).subscribe(p=>
        {      
        
         if(p['code'] == 200)
         {
          this.message=p['message'];
          
  
         }
         else
         {
          this.message=p['message'];
         
  
         }
         localStorage.removeItem("creditID")
        }) 
  

     }
     else
     {
       this.router.navigate(['/login'])
     }
   
  }
}
