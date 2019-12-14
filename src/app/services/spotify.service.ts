import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {



  constructor( private http: HttpClient ) {
    console.log('Servicio de Spotify listo para usar');
  }

  getNewReleases() {

    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQA4iwbWdAJ8LfpxzwxlMujAXMOtuuJ9UUtcQ-EY-9Ccmo0zg56KOlC1k204FPldO3JhsLmiewdIaRj1ioI'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});

  }
}
