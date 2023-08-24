import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountServiceService } from 'src/app/services/account/account-service.service';
import { PatientServiceService } from 'src/app/services/patient/patient-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-patients-update',
  templateUrl: './patients-update.component.html',
  styleUrls: ['./patients-update.component.scss']
})
export class PatientsUpdateComponent {
   // UPLOADING 
file!: File;
message = '';
messageError='';
id: string="";
date: any;
temponUrl:string=""
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
  firstname: new FormControl(),
  assurance: new FormControl(),
  adress: new FormControl(),
  email: new FormControl('', Validators.required),
  identification_code:new FormControl(),
  phone:new FormControl('', Validators.required),
  url_supported: new FormControl(''),
  birthDay: new FormControl()
  });



public visible = false;

toggleLiveDemo() {
  this.visible = !this.visible;
  if(!this.visible){ window.location.reload()}
  
}

handleLiveDemoChange(event: any) {
  this.visible = event;
}


submitted: boolean =false; 

constructor(private patientService : PatientServiceService,private accountService : AccountServiceService,private fb: FormBuilder,private router:Router,private _Activatedroute: ActivatedRoute) { }
ngOnInit(): void {
  const id = this._Activatedroute.snapshot.paramMap.get('id'); 
  

  this.accountService.getUserByID(id).subscribe(p=>
    {

     
     

     if(p['code'] == 200)
     {
      this.userGot=  p["data"]  as User
      this.userGot.url_supported=environment.folder_prise_charge+this.userGot.url_supported
      this.date=new Date(this.userGot.birthDay).toISOString().substring(0, 10) 
      this.createForm.patchValue({ 
        birthDay:(this.userGot.birthDay != 0)? new Date(this.userGot.birthDay).toISOString().substring(0, 10):null })
     
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
   

  if(this.createForm.value.email.length != 0 && this.createForm.value.phone.length != 0 && this.createForm.value.birthDay != 0)
  {
    const id = this._Activatedroute.snapshot.paramMap.get('id'); 

    let userToCreate=this.createForm.value as User 
    userToCreate.id=id;
    userToCreate.birthDay=new Date(this.createForm.value.birthDay).getTime()

    this.patientService.updatePatientWithFile(this.file,userToCreate).subscribe(p=>
      {
        this.messageError="";

       if(p['code'] == 200)
       {
        this.message="La modification de ce patient a reussi";
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




selectFile(event: any) {
  this.file = event.target.files.item(0);

}
}
