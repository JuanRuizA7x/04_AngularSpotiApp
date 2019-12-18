import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private spotifyService: SpotifyService ) {
    this.loading = true;
    this.error = false;
    this.spotifyService.getNewReleases().subscribe( (data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
      this.error = false;
    }, error => {
      this.error = true;
      this.loading = false;
      this.mensajeError = error.error.error.message;
    } );
  }

}
