import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {

  artista: any = {};
  loading: boolean;

  constructor( private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService ) {
    this.loading = true;
    this.activatedRoute.params.subscribe( (params: any) => this.getArtista(params['id']) );
   }

   getArtista( id: string) {
    this.loading = true;

    this.spotifyService.getArtist(id).subscribe( artista => {
      this.artista = artista;
      this.loading = false;
    } );
   }

}
