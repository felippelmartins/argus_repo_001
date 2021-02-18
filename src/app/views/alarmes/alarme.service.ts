import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Alarme} from './alarme.model';

@Injectable({
  providedIn: 'root'
})
export class AlarmeService {

  baseUrl = 'http://localhost:3001/alarmes';

  constructor(private http: HttpClient) { }


  read(): Observable<Alarme[]>{
    return this.http.get<Alarme[]>(this.baseUrl);
  }



}
