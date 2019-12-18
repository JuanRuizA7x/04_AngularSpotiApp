import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private spotifyService: SpotifyService) { }

  buscar(termino: string) {
    if ( termino.length > 0 ) {
      this.loading = true;
      this.error = false;
      this.spotifyService.getArtists( termino ).subscribe( (data: any) => {
        this.artistas = data;
        this.loading = false;
        this.error = false;
     }, error => {
      this.error = true;
      this.loading = false;
      this.mensajeError = error.error.error.message;
    } );
    } else {
      this.artistas = [];
      this.loading = false;
    }
   }

}
