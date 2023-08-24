import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountServiceService } from 'src/app/services/account/account-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.scss']
})
export class ForgotpwdComponent {
  messageError:String="";
  submitted:boolean = false;
 
   searchForm: FormGroup = this.fb.group({
    password: ['', Validators.required ],
    phone: ['', Validators.required,Validators.pattern("^[0-9]*$") ]

 });
  
  
  constructor(private accountService : AccountServiceService,private fb: FormBuilder,private router:Router) { }
  ngOnInit(): void {
    this.accountService.removeAllLocalStorage()
  }


  onSubmit() 
  {
    
   
    if(!this.searchForm.invalid)
    {


      this.accountService.login(this.searchForm.value).subscribe(p=>
        {


         if(p['code'] == 200)
         {

          this.accountService.initLocalStorage(p['data'].token,p['data'].role,p['data'].id,p['data'].type,p['data'].email,p['data'].lastname,p['data'].firstname,p['data'].phone)
          
          switch(p['data'].type)
          {
            case environment.TYPE_PROFESSIONNAL: (p['data'].role != null && p['data'].role == environment.TYPE_ROLE) ? this.router.navigate(['/caisses/dashboard']) :this.router.navigate(['/dashboard']);break;
            default : this.router.navigate(['/patients/accueil']);
 
          }
        
         }
         else
        {
          this.messageError=p['message'];
         
  
        }
        })
    }
    else{
      this.messageError="Veuillez renseigner tous les champs svp";
    }

    
   
  }
}
