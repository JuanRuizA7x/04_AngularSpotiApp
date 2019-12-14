import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];

  constructor( private spotifyService: SpotifyService) { }

  buscar(termino: string) {
    if ( termino.length > 0 ) {
      this.spotifyService.getArtists( termino ).subscribe( (data: any) => {
        this.artistas = data;
     } );
    } else {
      this.artistas = [];
    }
   }

}
