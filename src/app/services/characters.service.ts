import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private apiUrl = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    const url = `${this.apiUrl}/pokemon`;
    return this.http.get(url);
  }



  getCharacterDetailsByName(name: string): Observable<any> {
    const url = `${this.apiUrl}/pokemon/${name}`;
    return this.http.get(url);
  }
  

  

}
