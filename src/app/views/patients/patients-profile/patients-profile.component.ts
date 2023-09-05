import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountServiceService } from 'src/app/services/account/account-service.service';

@Component({
  selector: 'app-patients-profile',
  templateUrl: './patients-profile.component.html',
  styleUrls: ['./patients-profile.component.scss']
})
export class PatientsProfileComponent {
  message = '';
  messageError='';
  id: string="";
  date: any;
  userGot: User={
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
  };
  color=''
  createForm: FormGroup =new FormGroup({
    id: new FormControl(),
    lastname: new FormControl('', Validators.required),
    firstname:   new FormControl('', Validators.required),
    adress:   new FormControl(),
    email:   new FormControl('', Validators.required),
    typeOfUser:   new FormControl('PATIENT'),
    phone:   new FormControl('', Validators.required),
    birthDay: new FormControl(),
    role: new FormControl('')
  });
  
 
  public visible = false;

  toggleLiveDemo() {
    this.date=new Date(this.createForm.value.birthDay).toISOString().substring(0, 10) 
        
    this.createForm.patchValue({ birthDay:(this.createForm.value.birthDay != 0)? new Date(this.createForm.value.birthDay).toISOString().substring(0, 10):null })

    this.visible = !this.visible

   
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


    if(this.createForm.value.email.length != 0 && this.createForm.value.phone.length != 0
      && this.createForm.value.lastname.length != 0 && this.createForm.value.firstname.length != 0)
    {
      
      this.createForm.patchValue( {
        birthDay:new Date(this.createForm.value.birthDay).getTime(),
        id:id
       });
        this.accountService.updateUser(this.createForm.value).subscribe(p=>
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

  onClose()
  {
    this.date=new Date(this.createForm.value.birthDay).toISOString().substring(0, 10) 
        
    this.createForm.patchValue({ birthDay:(this.createForm.value.birthDay != 0)? new Date(this.createForm.value.birthDay).toISOString().substring(0, 10):null })


  }

  // UPDATE PASSWORD
  messageErrorP:String="";
  colorP:String="";
  messageP:String=""
  submittedP:boolean = false;
  
   searchForm: FormGroup = this.fb.group({
    oldPassword: ['', Validators.required ],
    newPassword: ['', Validators.required ],
    reNewPassword: ['', Validators.required ]
 });
 public visibleP = false;

  
 onKeyNewPassword(event: any) { 
  const reNewPassword = this.searchForm.value.reNewPassword ;
  const newPassword = event.target.value ;
  
  if(reNewPassword == newPassword)
  {
    this.messageP="La resaisie du  nouveau mot de passe est correcte"
    this.colorP="success"
   
  }
  else{
    this.messageP="La resaisie du  nouveau mot de passe est incorrecte"
    this.colorP="danger"

  }
  
 }


 onKeyReNewPassword(event: any) { 
  const newPassword = this.searchForm.value.newPassword ;
  const reNewPassword = event.target.value ;
  if(reNewPassword == newPassword)
  {
    this.messageP="La resaisie du  nouveau mot de passe est correcte"
    this.colorP="success"
   
  }
  else{
    this.messageP="La resaisie du  nouveau mot de passe est incorrecte"
    this.colorP="danger"

  }
   

 }
 
 closeModalP()
 {
   this.visibleP = false
   this.searchForm.reset()
   this.router.navigate(['/login'])
 }
  
 


  onSubmitP() 
  {
    
   
    if(!this.searchForm.invalid)
    {


       if(this.searchForm.value.newPassword == this.searchForm.value.reNewPassword)
       {

        const pwd={
          isAdmin:0,
          ID:localStorage.getItem("id"),
          oldPassword:this.searchForm.value.oldPassword,
          newPassword:this.searchForm.value.newPassword
        }  
    

        this.accountService.updatePwd(pwd).subscribe(p=>
          {
  
  
           if(p['code'] == 200)
           {
  
            this.visibleP=true
          
           }
           else
          {
            this.messageErrorP=p['message'];
            this.messageP=""
            this.colorP=""
    
          }
          })
       }
       else{
        this.messageP="La resaisie du  nouveau mot de passe est incorrecte"
        this.colorP="danger"
       }


      
    }
    else{
      this.messageErrorP="Veuillez renseigner tous les champs svp";
    }

    
   
  }
  
}
