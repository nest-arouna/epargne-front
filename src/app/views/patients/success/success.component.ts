import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditService } from 'src/app/services/credit/credit.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent
 {
 
  message:String=""
 patientID:any

  constructor(private creditService : CreditService,private _Activatedroute: ActivatedRoute,private router : Router) { }
  ngOnInit(): void {
    var id=localStorage.getItem("creditID")
    this.patientID=localStorage.getItem("id")

    if(!!id)
    {
      this.creditService.successCreditbyID(id).subscribe(p=>
        {      
  
         if(p['code'] == 200)
         {
          this.message=p['message'];
         
         }
         else
         {
          this.message=p['message'];
         }
  
        })    
  

    }
    else
    {
      this.router.navigate(['/login'])
    }
  
  
    
  } 


}
