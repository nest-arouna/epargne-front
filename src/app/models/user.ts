interface User {
    
    id:any;
    lastname:string;
    firstname:string;
    adress:string;
    email:string;
    password:string;
    token:string;
    typeOfUser:string;
    assurance:string;
    phone:string;
    birthDay:number;
    status:boolean;
    role:string;
    identification_code:string;
    url_supported:string;
    solde:number;
  }

  interface SearchUser {
    
    id:any;
    lastname:string;
    firstname:string;
    adress:string;
    email:string;
    assurance:string;
    password:string;
    token:string;
    typeOfUser:string;
    phone:string;
    birthDay:number;
    status:boolean;
    role:string;
    solde:number;
    identification_code:string;
    url_supported:string;
  }
  interface ChangePassword {
    ID :any;
	  oldPassword:string;
	  newPassword:string
    
  }