import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookupDataService {

  private readonly API_URL = 'http://localhost:8080/api';

  constructor(
    private http: HttpClient
  ) {}

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(
      `${this.API_URL}/categories/names`
    );
  }

  getPersons(): Observable<string[]> {
    return this.http.get<string[]>(
      `${this.API_URL}/persons/names`
    );
  }
}
