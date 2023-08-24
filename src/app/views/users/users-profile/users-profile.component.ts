import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountServiceService } from 'src/app/services/account/account-service.service';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.scss']
})
export class UsersProfileComponent {
  message = '';
  userCreate:any={}
  messageError='';
  id: string="";
  date: any;
  userGot:User={
    id: undefined,
    lastname: '',
    firstname: '',
    adress: '',
    email: '',
    password: '',
    token: '',
    typeOfUser: '',
    assurance: '',
    phone: '',
    birthDay: 0,
    status: false,
    role: '',
    identification_code: '',
    url_supported: '',
    solde: 0
  }
  color=''
  createForm: FormGroup =new FormGroup({
    id: new FormControl(),
    lastname: new FormControl(),
    firstname:   new FormControl(),
    adress:   new FormControl(),
    email:   new FormControl('', Validators.required),
    typeOfUser:   new FormControl('PROFESSIONNAL'),
    phone:   new FormControl('', Validators.required),
    birthDay: new FormControl(),
    role: new FormControl('', Validators.required)
  });
  
 

  public visible = false;

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  
  submitted: boolean =false; 

  constructor(private accountService : AccountServiceService,private fb: FormBuilder,private router:Router) { }
  ngOnInit(): void {
    const id = localStorage.getItem("id"); 

     this.accountService.getUserByID(id).subscribe(p=>
      {

       

       if(p['code'] == 200)
       {
        this.userGot=  p["data"]  as User
        this.date=new Date(this.userGot.birthDay).toISOString().substring(0, 10) 
        
        this.createForm.patchValue({ birthDay:(this.userGot.birthDay != 0)? new Date(this.userGot.birthDay).toISOString().substring(0, 10):null })
       

       }
       else
      {
        this.message="Ce compte a été enregistré avec succès";
        this.color="danger";
        this.messageError=p['message'];
       

      }
      })



     

    
  }



  onSubmit() 
  {
     
    const id = localStorage.getItem("id"); 


    if(this.createForm.value.email.length != 0 && this.createForm.value.phone.length != 0 && this.createForm.value.role.length != 0  )
    {
     
      this.userCreate=this.createForm.value
      this.userCreate.birthDay=new Date(this.createForm.value.birthDay).getTime()
      this.userCreate.id=id
        this.accountService.updateUser(this.userCreate).subscribe(p=>
        {
         if(p['code'] == 200)
         {
          this.message="La modification du compte a reussi";
          this.color="success";
          this.toggleLiveDemo()

         }
         else
        {
          this.message="La modification a échoué";
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
   closeModal()
  {
window.location.reload()
  }
}
