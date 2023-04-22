import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly path : string = environment.path_api;

  constructor( private snackBar : MatSnackBar, private http : HttpClient ) { }

  showMensagem(msg : string, action : string = "x") : void {
    this.snackBar.open(msg, action, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  create<T>(value : T) : Observable<T> {
    return this.http.post<T>( `${this.path}product `,value);
  }

  Get<T>() : Observable<T> {
    return this.http.get<T>(`${this.path}product`);
  }

}
