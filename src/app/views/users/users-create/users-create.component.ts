import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountServiceService } from 'src/app/services/account/account-service.service';
@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit{
 
  message = '';
  messageError='';
  userCreate:any={}
  color=''
  createForm: FormGroup =new FormGroup({
    lastname: new FormControl(),
    firstname:   new FormControl(),
    adress:   new FormControl(),
    email:   new FormControl('', Validators.required),
    password:   new FormControl('', Validators.required),
    typeOfUser:   new FormControl('PROFESSIONNAL'),
    phone:   new FormControl('', Validators.required),
    birthDay: new FormControl(),
    role: new FormControl('', Validators.required)
  });
  
  
  public visible = false;

  

 
  closeModal()
  {
    this.visible = false
    this.createForm.reset()
    this.router.navigate(['/users/users-list'])
  }

  
  submitted: boolean =false; 

  constructor(private accountService : AccountServiceService,private fb: FormBuilder,private router:Router) { }
  ngOnInit(): void {
   
  }


  onSubmit() 
  {
     

    if(this.createForm.value.email.length != 0 && this.createForm.value.phone.length != 0 && this.createForm.value.role.length != 0 )
    {
     
      this.userCreate=this.createForm.value
      this.userCreate.birthDay=new Date(this.createForm.value.birthDay).getTime()
     
     this.accountService.createProfessionnal(this.userCreate).subscribe(p=>
        {
         if(p['code'] == 200)
         {
          this.message="L'enregistrement du compte a reussi";
          this.color="success";
          this.visible=true
         

         }
         else
        {
          this.message="Ce compte a été enregistré avec succès";
          this.color="danger";
          this.messageError=p['message'];
         
  
        }
        }) 
    }
    else{

      this.messageError="Veuillez renseigner tous les champs obligatoires et valides svp";
    }

    
   
  }


  get sfrm() {
    return this.createForm.controls;
  }

  
  

  
}
