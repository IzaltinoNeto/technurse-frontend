import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NursesService {

  constructor(private http : HttpClient) { 
    
  }

  getNurse() : Observable<any>{
    return this.http.get(`${environment.defautltUrl}/api/nurses`);
  }


}
