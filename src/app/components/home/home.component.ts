import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  array: any[];

  constructor( private http: HttpClient ) {
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (paises: any) => {
      this.array = paises;
      console.log(paises);
    } );
   }

  ngOnInit() {
  }

}
