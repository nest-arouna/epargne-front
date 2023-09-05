import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import 'src/app/models/credit';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
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
 
 
   
   allCreditsByAdminCaisse(page :number,credit:Credit): Observable<any> {


    var url_searchC="credits?page="+page 
    
    if( credit.patientID != undefined ) 
    {
      url_searchC=url_searchC+"&patientID="+credit.patientID
    }
    if(credit.identifiantCredit != null &&  credit.identifiantCredit.length != 0) 
    {
      url_searchC=url_searchC+"&identifiant_credit="+credit.identifiantCredit
    }
    if( credit.montant != 0)
    {
      url_searchC=url_searchC+"&montant="+credit.montant
    }
    if(credit.dateOperation != 0)
    {
      url_searchC=url_searchC+"&date_operation="+credit.dateOperation
    }
    if(credit.dateOperationFin != 0)
    {
      url_searchC=url_searchC+"&date_operation_fin="+credit.dateOperationFin
    }


    return this._http.get<Credit[]>(this._base+ url_searchC)
       .pipe(
        retry(2),
        catchError(this.handleError)
      );
    }

 
 
 
   allCredits(page :number,credit:Credit): Observable<any> {


     var url_searchC="credits/patient/"+credit.patientID+"?page="+page
     
     if(credit.identifiantCredit != null && credit.identifiantCredit.length != 0) 
     {
       url_searchC=url_searchC+"&identifiant_credit="+credit.identifiantCredit
     }
 
     if(credit.montant != 0)
     {
       url_searchC=url_searchC+"&montant="+credit.montant
     }
     if(credit.dateOperation != 0)
     {
       url_searchC=url_searchC+"&date_operation="+credit.dateOperation
     }
     if(credit.dateOperationFin != 0)
     {
       url_searchC=url_searchC+"&date_operation_fin="+credit.dateOperationFin
     }


 
     return this._http.get<Credit[]>(this._base+ url_searchC)
        .pipe(
         retry(2),
         catchError(this.handleError)
       );
     }
 
    
 
   createCredit(p: any): Observable<any> {
     return this._http.post<any>(this._base + 'credits', JSON.stringify(p))
        .pipe(
         retry(2),
         catchError(this.handleError)
       );
     }
 
  
     getCreditbyID(p: any): Observable<any> {
       return this._http.get<any>(this._base + 'credits/'+p)
          .pipe(
           retry(2),
           catchError(this.handleError)
         );
       }
     
  
       successCreditbyID(p: any): Observable<any> {
        return this._http.get<any>(this._base + 'credits/success/'+p)
           .pipe(
            retry(2),
            catchError(this.handleError)
          );
        }
        failedCreditbyID(p: any): Observable<any> {
          return this._http.get<any>(this._base + 'credits/failed/'+p)
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
