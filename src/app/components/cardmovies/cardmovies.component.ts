import { Component,OnInit, Input } from '@angular/core';
import { Movie } from 'src/interface/movies';

@Component({
  selector: 'app-cardmovies',
  templateUrl: './cardmovies.component.html',
  styleUrls: ['./cardmovies.component.css']
})
export class CardmoviesComponent {
  
  @Input('movie') movie!: Movie;
  
  constructor(){ }

  ngOnInit(){
    
  }

  getImagen(){
   
   return this.movie.Poster !== 'N/A' ? this.movie.Poster : 'https://via.placeholder.com/600';   
    /* if(this.movie.Poster === 'N/A'){
      return 'https://via.placeholder.com/600';
    }else{
      return this.movie.Poster;
    }*/
  }

}
