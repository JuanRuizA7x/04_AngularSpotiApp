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
      'Authorization': 'Bearer BQDRhcjb-58PZfjwu6LS9f8naVMbtqGvC-vnw2jFOsBzFV0erBXpN2c__LDZH5BD2iHjOlqb_M59t_eL-js'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});

  }

  getArtists( termino: string ) {

    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQDRhcjb-58PZfjwu6LS9f8naVMbtqGvC-vnw2jFOsBzFV0erBXpN2c__LDZH5BD2iHjOlqb_M59t_eL-js'
    });

    return this.http.get('https://api.spotify.com/v1/search?q=' + termino + '&type=artist', {headers});

  }

}
