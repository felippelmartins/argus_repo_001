import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Op } from './op.model';

@Injectable({
  providedIn: 'root'
})
export class OpService {

  baseUrl = 'http://localhost:3001/ops';

  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

  showMessage(msg: string) : void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

create(op: Op) : Observable<Op> {
  return this.http.post<Op>(this.baseUrl, op);
}

read(): Observable<Op[]>{
 return this.http.get<Op[]>(this.baseUrl)
}

}
