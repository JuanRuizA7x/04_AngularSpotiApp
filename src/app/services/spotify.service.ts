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
      'Authorization': 'Bearer BQCRJKMtAHDIpNVBuSSOYXtEKf2t1UjgiNtRlzw551JVQ7low6rX_5JUILxLHnXXFHxE31wcrRPrcN_NeIY'
    });

    return this.http.get( url, {headers} );

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases').pipe(map((data: any) => data.albums.items));

  }

  getArtists( termino: string ) {

    return this.getQuery(`search?q=${termino}&type=artist`).pipe(map((data: any) => data.artists.items));

  }

  getArtist( id: string ) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks( id: string ) {
    return this.getQuery(`artists/${id}/top-tracks?country=ES`).pipe(map((data: any) => data.tracks));
  }

}
