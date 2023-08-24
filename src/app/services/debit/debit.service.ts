import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, retry, catchError, throwError } from 'rxjs';
import 'src/app/models/debit';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DebitService {

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
 
   
 
 
 
 
   allDebits(page :number,debit:Debit): Observable<any> {


     var url_searchC="debits?page="+page
     
     if(debit.motif != null && debit.motif.length != 0) 
     {
       url_searchC=url_searchC+"&motif="+debit.motif
     }
 
     if(debit.montant != null && debit.montant != 0)
     {
       url_searchC=url_searchC+"&montant="+debit.montant
     }
     if(debit.dateOperation != null && debit.dateOperation != 0)
     {
       url_searchC=url_searchC+"&date_operation="+debit.dateOperation
     }


 
     return this._http.get<Debit[]>(this._base+ url_searchC)
        .pipe(
         retry(2),
         catchError(this.handleError)
       );
     }
     allDebitByPatients(page :number,debit:Debit): Observable<any> {


      var url_searchC="debits/patient/"+debit.patientID+"?page="+page
      
      if(debit.motif.length != 0) 
      {
        url_searchC=url_searchC+"&motif="+debit.motif
      }
  
      if(debit.montant != 0)
      {
        url_searchC=url_searchC+"&montant="+debit.montant
      }
      if(debit.dateOperation != 0)
      {
        url_searchC=url_searchC+"&date_operation="+debit.dateOperation
      }
 
 
  
      return this._http.get<Credit[]>(this._base+ url_searchC)
         .pipe(
          retry(2),
          catchError(this.handleError)
        );
      }

      allDebitForPatientsByProfessionnals(page :number,debit:Debit): Observable<any> {

        var url_searchC="debits/patient/"+debit.patientID+"/professionnal/"+debit.professionnalID+"?page="+page
        
        if(debit.motif.length != 0) 
        {
          url_searchC=url_searchC+"&motif="+debit.motif
        }
    
        if(debit.montant != 0)
        {
          url_searchC=url_searchC+"&montant="+debit.montant
        }
        if(debit.dateOperation != 0)
        {
          url_searchC=url_searchC+"&date_operation="+debit.dateOperation
        }
   
   
    
        return this._http.get<Credit[]>(this._base+ url_searchC)
           .pipe(
            retry(2),
            catchError(this.handleError)
          );
        }

      allDebitByProfessionnals(page :number,debit:Debit): Observable<any> {


        var url_searchC="debits/professionnal/"+debit.professionnalID+"?page="+page
        
        if(debit.motif.length != 0) 
        {
          url_searchC=url_searchC+"&motif="+debit.motif
        }
    
        if(debit.montant != 0)
        {
          url_searchC=url_searchC+"&montant="+debit.montant
        }
        if(debit.dateOperation != 0)
        {
          url_searchC=url_searchC+"&date_operation="+debit.dateOperation
        }
   
   
    
        return this._http.get<Credit[]>(this._base+ url_searchC)
           .pipe(
            retry(2),
            catchError(this.handleError)
          );
        }
    
 
   createDebit(p: any): Observable<any> {
     return this._http.post<any>(this._base + 'debits', JSON.stringify(p))
        .pipe(
         retry(2),
         catchError(this.handleError)
       );
     }
 
  
     getDebitbyID(p: any): Observable<any> {
       return this._http.get<any>(this._base + 'debits/'+p)
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