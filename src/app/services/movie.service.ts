import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ApiResponse } from 'src/interface/ApiResponse';
import { Movie } from 'src/interface/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  /**APIkey: a22bacf4 */
  private API_URL: string = 'http://www.omdbapi.com/?apikey=a22bacf4';
  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string): Observable<Movie[]>{
    /**otro metodo valido seria:
     * return this.http.get(this.API_URL + '&s=' + searchTerm);;
     */
   return this.http.get<ApiResponse>(`${this.API_URL}&s=${searchTerm}`).pipe(
      map(response =>{
        return response.Search;
      })
   );
   
  }
}
