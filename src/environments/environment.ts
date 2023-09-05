// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //url: 'http://localhost:7070/',
  url:'https://icare-nestlabs-test.net:7070/',
  TYPE_PROFESSIONNAL:"PROFESSIONNAL",
  TYPE_ROLE:"USER",
  TYPE_PATIENT:"PATIENT",
  ROLE_ADMIN:"ADMIN",
  rows_per_table: '10',
  agence_code:'AIOCN23089',  
  secure_code :'rkIiV2kOujfcIi8HOGxHmubIq3g7miEYneMZXnqEDG0K1p9Sjn',  
  folder_prise_charge:'/var/www/nest/',
  domaine :'NEST',  
  order_number:'NEST-P',
  url_redirection_success :'https://icare-nestlabs-test.net:7070/#/patients/success',   
  url_redirection_failed :'https://icare-nestlabs-test.net:7070/#/patients/failed',
  
};





/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */


// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
