import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService ) {
    this.loading = true;
    this.error = false;
    this.activatedRoute.params.subscribe( (params: any) => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    } );
   }

   getArtista( id: string) {
    this.loading = true;

    this.spotifyService.getArtist(id).subscribe( artista => {
      this.artista = artista;
      this.loading = false;
      this.error = false;
    }, error => {
      this.error = true;
      this.loading = false;
      this.mensajeError = error.error.error.message;
    } );
   }

   getTopTracks( id: string ) {
    this.spotifyService.getTopTracks(id).subscribe( (topsTracks: any) => {
      this.topTracks = topsTracks;
      this.error = false;
    }, error => {
      this.error = true;
      this.loading = false;
      this.mensajeError = error.error.error.message;
    } );
   }

}
