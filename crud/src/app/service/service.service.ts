import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Pessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  pessoa:Pessoa;
  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/crud01/pessoas';

  getPessoas(){
    return this.http.get<Pessoa[]>(this.url)
  }
}
