import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, map, throwError } from 'rxjs';
import {environment} from '../../../environments/environment';
import 'src/app/models/reponse';
import 'src/app/models/user';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
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


  login(p:any) {
      return this._http.post<any>(this._base+"login",p) .pipe(
        catchError(this.handleError)
      )
          
  }

  updatePwd(p:any) {
    
    return this._http.post<any>(this._base+"modifierpwd/"+p.ID,p) .pipe(
      catchError(this.handleError)
    )
        
}

  logout()
   {
    this.removeAllLocalStorage()
     this.router.navigate(['/login']);
  }


  allProfessionnals(page :number,user:User): Observable<any> {


     
    var url_searchC="users/professionnals?page="+page
    
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
    if(typeof user?.phone != undefined && user?.phone.length != 0)
    {
      url_searchC=url_searchC+"&phone="+user?.phone
    }


    return this._http.get<User[]>(this._base + url_searchC)
       .pipe(
        retry(2),
        catchError(this.handleError)
      );
    }

   

  createProfessionnal(p: any): Observable<any> {
    return this._http.post<any>(this._base + 'users', JSON.stringify(p))
       .pipe(
        retry(2),
        catchError(this.handleError)
      );
    }



   

    updateUser(p: any): Observable<any> {
      return this._http.post<any>(this._base + 'users/update', JSON.stringify(p))
         .pipe(
          retry(2),
          catchError(this.handleError)
        );
      }

    getUserByID(p: any): Observable<any> {
      return this._http.get<any>(this._base + 'users/'+p)
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

  public removeAllLocalStorage() {
    return Object.keys(localStorage)
        .reduce((obj, k) => {
              return { ...obj, [k]: localStorage.removeItem(k)}}, {});
  }

 public  initLocalStorage(token: any,role: any,id: any,type: any,email: any,lastname: any,firstname: any,phone: any)
  {
    localStorage.setItem("token",token)
    localStorage.setItem("role",role)
    localStorage.setItem("id",id)
    localStorage.setItem("type",type)
    localStorage.setItem("email",email)
    localStorage.setItem("lastname",lastname)
    localStorage.setItem("firstname",firstname)
    localStorage.setItem("phone",phone)

  }
}
