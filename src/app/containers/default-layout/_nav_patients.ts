import { INavData } from '@coreui/angular';

export const navItemPatients: INavData[] = [
  {
    name: 'Accueil ',
    url: '/patients/accueil',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Mes Recharges',
    url: '/patients/patients-transactions',
    iconComponent: { name: 'cil-cursor' }
  },
  {
    name: 'Mes Encaissements',
    url: '/patients/facturations',
    iconComponent: { name: 'cilCreditCard' }
  },
  {
    name: 'Mon Profil',
    url: '/patients/patients-profile',
    iconComponent: { name: 'cil-user' }
  }
  
];
