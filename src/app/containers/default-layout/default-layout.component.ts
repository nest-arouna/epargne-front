import { Component, OnInit } from '@angular/core';

import { navItemUsers } from './_nav_users';
import { navItemPatients } from './_nav_patients';
import { navItemCaisses } from './_nav_caisses';

import { INavData } from '@coreui/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {

  public navItems :INavData[]=[];
 
  constructor() {}
  ngOnInit(): void { navItemCaisses
   const type= localStorage.getItem("type")
   const role= localStorage.getItem("role")

   switch(type)
   {
    case environment.TYPE_PROFESSIONNAL:(role != null && role == environment.TYPE_ROLE) ? this.navItems =navItemCaisses:this.navItems =navItemUsers; break;
    default:this.navItems =navItemPatients;
   }



  }



}
