import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/**modulos */
import { HttpClientModule } from '@angular/common/http'

/**componentes */
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CardmoviesComponent } from './components/cardmovies/cardmovies.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CardmoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
