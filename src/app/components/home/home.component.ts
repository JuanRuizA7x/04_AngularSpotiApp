import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];

  constructor( private spotifyService: SpotifyService ) {
    this.spotifyService.getNewReleases().subscribe( (data: any) => {
      this.nuevasCanciones = data.albums.items;
    });
  }

}