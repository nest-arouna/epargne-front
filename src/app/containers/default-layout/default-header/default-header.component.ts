import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit{

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
  isPatient:boolean=false
  isAdmin:boolean=false
  isCaisse:boolean=false
  constructor(private classToggler: ClassToggleService,private router:Router) {
    super();
  }
  ngOnInit(): void {

   const role=localStorage.getItem("role");
   const type=localStorage.getItem("type");   

   if(!!localStorage.getItem("type") && localStorage.getItem('type') == environment.TYPE_PROFESSIONNAL 
   && !!localStorage.getItem("role") && localStorage.getItem('role') == environment.ROLE_ADMIN)
   {
  this.isAdmin =true
   }
   else if(!!localStorage.getItem("type") && localStorage.getItem('type') == environment.TYPE_PROFESSIONNAL 
   && !!localStorage.getItem("role") && localStorage.getItem('role') == environment.TYPE_ROLE)
   {
    this.isCaisse=true
   }
    else if(!!localStorage.getItem("type") && localStorage.getItem('type') == environment.TYPE_PATIENT)
    {
      this.isPatient =true
    } 
    else{
      this.router.navigate(['/login']);
    }
  
  }
}
