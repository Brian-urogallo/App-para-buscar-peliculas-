import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, debounceTime, distinct, filter, fromEvent, map, switchMap, tap } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/interface/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy{
  movies:Movie[] = [];
  @ViewChild('moviesSearchInput', {static:true}) moviesSearchInput!: ElementRef;
  movieSuscription!: Subscription
  
  constructor(private movieService: MovieService){ }

  ngOnInit(): void{
   this.movieSuscription = fromEvent<Event>(this.moviesSearchInput.nativeElement, 'keyup').pipe(
      map((event: Event) =>{
        const searchTerm = (event.target as HTMLInputElement).value;
        return searchTerm
      }),
      filter((searchTerm: string) => searchTerm.length > 3),
      debounceTime(500),
      distinct(),
      switchMap((searchTerm: string) => this.movieService.getMovies(searchTerm)),
      tap((searchTerm) => console.log(searchTerm))
      ).subscribe((movies: Movie[])=>{
        this.movies = movies !== undefined ? movies : [];
      });
  }

  ngOnDestroy(): void {
    this.movieSuscription.unsubscribe;
  }

  /*getMovies(searchTerm: string){
    this.movieService.getMovies(searchTerm).subscribe(movies =>{
      console.log(this.movies);
      this.movies = movies !== undefined ? movies : [];
      });    
    parametros de metodo-> (searchTerm: string)
   
  }*/
}
