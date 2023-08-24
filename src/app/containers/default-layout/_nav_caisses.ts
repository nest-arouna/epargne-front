import { INavData } from '@coreui/angular';



export const navItemCaisses: INavData[] = [
  {
    name: 'Tableau de bord',
    url: '/caisses/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  }, 

  {
    name: 'Patients',
    url: '/caisses-list',
    iconComponent: { name: 'cil-people' },
    children: [ 
      {
        name: 'Liste des patients',
        url: '/caisses/patients-list',
      },  
      {
        name: 'Ajouter  patient',
        url: '/caisses/patients-create',
      }
    ]
  },
  {
    name: 'Encaissements',
    url: '/encaissements',
    iconComponent: { name: 'cilCreditCard' },
    children: [ 
      
      {
        name: 'Liste des encaissements',
        url: '/caisses/encaissements',
      }
      
    ]
  }
  ,
  {
    name: 'Mon profil',
    url: '/caisses/profile',
    iconComponent: { name: 'cil-user' }
  }
 
  
];
