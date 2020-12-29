import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroesUrl = 'https://guarded-mesa-24051.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl + 'heros');  
  }

}
