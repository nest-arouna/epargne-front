import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  _base = environment.url;
 results :Reponse = {
  code: 0,
  message: "",
  data: "",
};
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers" : "application/json",
    })
  };

 
  constructor(private _http: HttpClient,private router : Router) { }



  createPatient(p: any): Observable<any> {
    return this._http.post<any>(this._base + 'patients', JSON.stringify(p))
       .pipe(
        retry(2),
        catchError(this.handleError)
      );
    }

    createPatientWithFileZE(file : File,user: User): Observable<any> 
    {
      const formData: FormData = new FormData();
      formData.append('file', file);
      formData.append('assurance',user.assurance);
      formData.append('email', user.email);
      formData.append('phone', user.phone);
      formData.append('lastname', user.lastname);
      formData.append('firstname', user.firstname);
      formData.append('adress', user.adress);
      formData.append('birthDay', user.birthDay.toString());
      formData.append('identification_code', user.identification_code);


    return this._http.post<any>(this._base+"patients/file", formData);
    }

    updatePatientWithFile(file : File,user: User): Observable<any>
    {
      const formData: FormData = new FormData();
      formData.append('file', file);
      formData.append('assurance',user.assurance);
      formData.append('id', user.id)
      formData.append('email', user.email);
      formData.append('phone', user.phone);
      formData.append('lastname', user.lastname);
      formData.append('firstname', user.firstname);
      formData.append('adress', user.adress);
      formData.append('birthDay', user.birthDay.toString());
      formData.append('identification_code', user.identification_code);


    return this._http.post<any>(this._base+"patients/update/file", formData);
    }

  allPatients(page :number,user:User): Observable<any> {


     
    var url_searchC="users/patients?page="+page
    
    if(typeof user?.lastname != undefined && user?.lastname.length != 0) 
    {
      url_searchC=url_searchC+"&lastname="+user?.lastname
    }

    if(typeof user?.firstname != undefined && user?.firstname.length != 0)
    {
      url_searchC=url_searchC+"&firstname="+user?.firstname
    }
    if(typeof user?.adress !=undefined && user?.adress.length != 0)
    {
      url_searchC=url_searchC+"&adress="+user?.adress
    }
    if(typeof user?.email != undefined && user?.email.length != 0)
    {
      url_searchC=url_searchC+"&email="+user?.email
    }

    if(typeof user?.identification_code != undefined && user?.identification_code.length != 0)
    {
      url_searchC=url_searchC+"&identification_code="+user?.identification_code
    }

    if(typeof user?.phone != undefined && user?.phone.length != 0)
    {
      url_searchC=url_searchC+"&phone="+user?.phone
    }
    if(typeof user?.birthDay != undefined && user?.birthDay != 0)
    {
      url_searchC=url_searchC+"&birthDay="+user?.birthDay
    }

    return this._http.get<User[]>(this._base + url_searchC)
       .pipe(
        retry(2),
        catchError(this.handleError)
      );
    }

    getCompteByID(p: any): Observable<any> {
      return this._http.get<any>(this._base + 'comptes/'+p)
         .pipe(
          retry(2),
          catchError(this.handleError)
        );
      }


      

       // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,

      if (error.status==302) {
        this.results.code =error.status;
        this.results.message =error.message;
        this.results.data =error.error.result;
        return error.error.result;
      }
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
