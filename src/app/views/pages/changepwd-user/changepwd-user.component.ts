import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountServiceService } from 'src/app/services/account/account-service.service';

@Component({
  selector: 'app-changepwd-user',
  templateUrl: './changepwd-user.component.html',
  styleUrls: ['./changepwd-user.component.scss']
})
export class ChangepwdUserComponent {
  messageError:String="";
  color:String="";
  message:String=""
  submitted:boolean = false;
  
   searchForm: FormGroup = this.fb.group({
    oldPassword: ['' ],
    newPassword: ['', Validators.required ],
    reNewPassword: ['', Validators.required ]
 });
 public visible = false;

  
 onKeyNewPassword(event: any) { 
  const reNewPassword = this.searchForm.value.reNewPassword ;
  const newPassword = event.target.value ;
  
  if(reNewPassword == newPassword)
  {
    this.message="La resaisie du  nouveau mot de passe est correcte"
    this.color="success"
   
  }
  else{
    this.message="La resaisie du  nouveau mot de passe est incorrecte"
    this.color="danger"

  }
  
 }


 onKeyReNewPassword(event: any) { 
  const newPassword = this.searchForm.value.newPassword ;
  const reNewPassword = event.target.value ;
  if(reNewPassword == newPassword)
  {
    this.message="La resaisie du  nouveau mot de passe est correcte"
    this.color="success"
   
  }
  else{
    this.message="La resaisie du  nouveau mot de passe est incorrecte"
    this.color="danger"

  }
   

 }
 
 closeModal()
 {
   this.visible = false
   this.searchForm.reset()
   this.router.navigate(['/users/users-list'])
 }
  
  constructor(private accountService : AccountServiceService,private fb: FormBuilder,private router:Router,private _Activatedroute: ActivatedRoute) { }
  ngOnInit(): void {
  }


  onSubmit() 
  {
    
   
    if(!this.searchForm.invalid)
    {


       if(this.searchForm.value.newPassword == this.searchForm.value.reNewPassword)
       {

        const pwd={
          isAdmin:1,
          ID:localStorage.getItem("id"),
          oldPassword:this.searchForm.value.oldPassword,
          newPassword:this.searchForm.value.newPassword
        }  
    
        this.accountService.updatePwd(pwd).subscribe(p=>
          {
  
  
           if(p['code'] == 200)
           {
  
            this.visible=true
          
           }
           else
          {
            this.messageError=p['message'];
            this.message=""
            this.color=""
    
          }
          })
       }
       else{
        this.message="La resaisie du  nouveau mot de passe est incorrecte"
        this.color="danger"
       }


      
    }
    else{
      this.messageError="Veuillez renseigner tous les champs svp";
    }

    
   
  }
}
