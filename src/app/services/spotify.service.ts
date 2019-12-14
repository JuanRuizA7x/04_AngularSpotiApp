import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {



  constructor( private http: HttpClient ) { }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQAZHSXkZK88K6q2rvTmXpzoTvyN9L_1LYOtPq7My-3BXOafE2GityAr23uyU_XD2t8yhqX1KZyDuM9HJFo'
    });

    return this.http.get( url, {headers} );

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases').pipe(map((data: any) => data.albums.items));

  }

  getArtists( termino: string ) {

    return this.getQuery(`search?q=${termino}&type=artist`).pipe(map((data: any) => data.artists.items));

  }

}
