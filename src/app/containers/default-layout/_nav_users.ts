import { INavData } from '@coreui/angular';



export const navItemUsers: INavData[] = [
  {
    name: 'Tableau de bord',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  }, 

  {
    name: 'Patients',
    url: '/patients-list',
    iconComponent: { name: 'cil-people' },
    children: [ 
      {
        name: 'Liste des patients',
        url: '/patients/patients-list',
      },  
      {
        name: 'Ajouter  patient',
        url: '/patients/patients-create',
      }
    ]
  },
  {
    name: 'Encaissements',
    url: '/facturations',
    iconComponent: { name: 'cilCreditCard' },
    children: [ 
      
      {
        name: 'Liste des encaissements',
        url: '/facturations/facturations-list',
      }
      
    ]
  },
  {
    name: 'Recharges',
    url: '/depots',
    iconComponent: { name: 'cil-cursor' },
    children: [ 
      {
        name: 'Liste des recharges',
        url: '/depots/depots',
      }
    ]
  },
  {
    name: 'Utilisateurs',
    url: '/users',
    iconComponent: { name: 'cilList' },
    children: [      
      {
        name: 'Liste des utilisateurs',
        url: '/users/users-list'
      },
      {
        name: 'Ajouter utilisateur',
        url: '/users/users-create'
      },
      {
        name: 'Mon profil',
        url: '/users/users-profile'
      }
      
    ]
  },

 
  
];
