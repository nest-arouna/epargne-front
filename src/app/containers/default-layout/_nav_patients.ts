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
    name: 'Mes facturations',
    url: '/patients/facturations',
    iconComponent: { name: 'cilCreditCard' }
  },
  {
    name: 'Mon profil',
    url: '/patients/patients-profile',
    iconComponent: { name: 'cil-user' }
  }
  
];
