import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/internal/operators';
import { environment } from 'src/environments/environment';
import { GetSurveyQuestionListRequest } from '../model/getquetions.request';
import { SubmitSurvey } from '../model/request/sumitsurvey';
import { getDomain } from 'tldts';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public loginStatus = new BehaviorSubject<boolean>(this.hasToken());
  constructor(private http: HttpClient,private cookieService: CookieService) {
    this.getheaders();
  }
  isLoggedIn(): Observable<boolean> {
    return this.loginStatus.asObservable();
  }
  private hasToken(): boolean {
    return this.cookieService.check('X-Auth');
  }
  getheaders(): any {
    let httpOptions: any;
    if (this.cookieService.get('X-Auth')) {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8',
          "Authorization": "Bearer " + this.cookieService.get('X-Auth')
        })
      };
    } else {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8'
        })
      };
    }
    return httpOptions;
  }
  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
  logout() : void {
    localStorage.clear();
    this.loginStatus.next(false);
    this.cookieService.delete('X-Auth');
  }
  // Set StudentSurveyStart
  setStudentSurveyStart(request: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}api/exam/setStudentSurveyStart`, request, this.getheaders())
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Get All Quetions List
  getSurveyQuestionList(request: GetSurveyQuestionListRequest): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}api/exam/getSurveyQuestionList`, request, this.getheaders())
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Get Survey Detail
  getStudentSurveyDetails(request: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}api/exam/getStudentSurveyDetails`, request, this.getheaders())
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  // Update Answer
  setQuesAnsSave(request: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}api/exam/setQuesAnsSave`, request, this.getheaders())
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  
  // Submit Survey
  setStudentSurveySubmit(request: SubmitSurvey): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}api/exam/setStudentSurveySubmit`, request, this.getheaders())
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  
    // Clear Previous Answer
    setQuesAnsDelete(request: any): Observable<any> {
      return this.http.post<any>(`${environment.apiUrl}api/exam/setQuesAnsDelete`, request, this.getheaders())
        .pipe(
          retry(1),
          catchError(this.handleError)
        );
    }


    //Exam
    getStudentLogin(request: any) : Observable<HttpResponse<any>> {     
        return this.http.post<any>(`${environment.apiUrl}api/exam/getStudentLogin`, JSON.stringify(request), {
          headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
          }),
          observe: 'response'
        })
          .pipe(
            retry(1),
            tap((resp: HttpResponse<any>) => {
              console.log('resp',resp);
              if (resp.headers && resp.headers.get('X-Auth')) {
                console.log('dsadsad');
                var cookieDomain= getDomain(window.location.origin);
                if(!cookieDomain?.includes("localhost")){
                  cookieDomain='.'+cookieDomain
                }
                if(window.location.origin?.includes("localhost")){
                  cookieDomain='localhost';
                }
                this.cookieService.set('X-Auth', (resp.headers.get('X-Auth') || ''), undefined, '/',cookieDomain);
                this.getheaders();
              }
              return resp;
            }),
            catchError(this.handleError)
          );
      
    }
    getStudentSurveylist(request: any) : Observable<any> {     
      return this.http.post<any>(`${environment.apiUrl}api/exam/getStudentSurveylist`, JSON.stringify(request), this.getheaders())
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    
  }
  getStudentSurveyResult(request: any) : Observable<any> {     
    return this.http.post<any>(`${environment.apiUrl}api/exam/getStudentSurveyResult`, JSON.stringify(request), this.getheaders())
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  
}
getStudentSurveyToppers(request: any) : Observable<any> {     
  return this.http.post<any>(`${environment.apiUrl}api/exam/getStudentSurveyToppers`, JSON.stringify(request), this.getheaders())
  .pipe(
    retry(1),
    catchError(this.handleError)
  );

}
  

getStudentExamList(request: any) : Observable<any> {     
  return this.http.post<any>(`${environment.apiUrl}api/exam/getStudentExamList`, JSON.stringify(request), this.getheaders())
  .pipe(
    retry(1),
    catchError(this.handleError)
  );

}

getVideoCategory(request: any) : Observable<any> {     
  return this.http.post<any>(`${environment.apiUrl}api/videojwt/getVideoCategory`, JSON.stringify(request), this.getheaders())
  .pipe(
    retry(1),
    catchError(this.handleError)
  );

}

getVideoList(request: any) : Observable<any> {     
  return this.http.post<any>(`${environment.apiUrl}api/videojwt/getVideoList`, JSON.stringify(request), this.getheaders())
  .pipe(
    retry(1),
    catchError(this.handleError)
  );

}


getVideoStart(request: any) : Observable<any> {     
  return this.http.post<any>(`${environment.apiUrl}api/videojwt/getVideoStart`, JSON.stringify(request), this.getheaders())
  .pipe(
    retry(1),
    catchError(this.handleError)
  );

}
  
}
