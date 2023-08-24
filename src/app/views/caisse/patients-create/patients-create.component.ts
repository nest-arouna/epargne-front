import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientServiceService } from 'src/app/services/patient/patient-service.service';

@Component({
  selector: 'app-patients-create',
  templateUrl: './patients-create.component.html',
  styleUrls: ['./patients-create.component.scss']
})
export class PatientsCreateComponent {

  

// UPLOADING 
file!: File;

message = '';
messageError='';
color=''
createForm: FormGroup =new FormGroup({
  assurance: new FormControl(''),
  lastname: new FormControl(''),
  firstname:   new FormControl(''),
  adress:   new FormControl(''),
  email:   new FormControl('', Validators.required),
  phone:   new FormControl('', Validators.required),
  birthDay: new FormControl('', Validators.required),
  identification_code: new FormControl(''),    
});


public visible = false;

closeModal()
{
  this.visible = false
  this.createForm.reset()
  this.router.navigate(['/caisses/patients-list'])
}


submitted: boolean =false; 

constructor(private patientService : PatientServiceService,private fb: FormBuilder,private router:Router) {

 }

 


ngOnInit(): void {

 

 
}


onSubmit() 
{
   

  if(this.createForm.value.email.length != 0 && this.createForm.value.phone.length != 0 && this.createForm.value.birthDay.length != 0)
  {
   
   
    let userToCreate=this.createForm.value as User 
    userToCreate.birthDay=new Date(this.createForm.value.birthDay).getTime()
    this.patientService.createPatient(userToCreate).subscribe(p=>
      {
        this.messageError="";

       if(p['code'] == 200)
       {
        this.message="L'enregistrement de ce patient a reussi";
        this.color="success";
        this.visible=true

       }
       else
      {
        console.log(JSON.stringify(p))

        this.message="L'enregistrement a échoué";
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
