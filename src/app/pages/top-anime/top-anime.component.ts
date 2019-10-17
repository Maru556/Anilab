import { Component, OnInit } from '@angular/core';
import { TopUpcoming, TopAiring, TopTv, TopMovies } from 'src/app/api.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-top-anime',
  templateUrl: './top-anime.component.html',
  styleUrls: ['./top-anime.component.scss']
})
export class TopAnimeComponent implements OnInit {
  apiUrl: string = 'https://api.jikan.moe/v3';

  //Interfaces
  dataUp: TopUpcoming[];
  dataAir: TopAiring[];
  dataTv: TopTv[];
  dataMov: TopMovies[];

  constructor(private router: Router, private http: HttpClient) {}

  //api call for upcoming
  getTopUpcoming() {
    return this.http
      .get<TopUpcoming[]>(`${this.apiUrl}/top/anime/1/upcoming`)
      .subscribe(
        dataUp => {
          this.dataUp = dataUp;
          //console.log(dataUp);
        },
        err => console.error(err),
        () => console.log('done loading Upcoming')
      );
  }

  //api call for airing
  getTopAiring() {
    return this.http
      .get<TopAiring[]>(`${this.apiUrl}/top/anime/1/airing`)
      .subscribe(
        dataAir => {
          this.dataAir = dataAir;
          //console.log(dataAir);
        },
        err => console.error(err),
        () => console.log('done loading Airing')
      );
  }

  //api call for tv
  getTopTv() {
    return this.http.get<TopTv[]>(`${this.apiUrl}/top/anime/1/tv`).subscribe(
      dataTv => {
        this.dataTv = dataTv;
        //console.log(dataTv);
      },
      err => console.error(err),
      () => console.log('done loading top TV')
    );
  }

  //api call for movie
  getTopMovie() {
    return this.http
      .get<TopMovies[]>(`${this.apiUrl}/top/anime/1/movie`)
      .subscribe(
        dataMov => {
          this.dataMov = dataMov;
          //console.log(dataMov);
        },
        err => console.error(err),
        () => console.log('done loading Movies')
      );
  }

  //routing to detail page base on mal_id
  toDetailPage(data) {
    this.router.navigate(['/details', data.mal_id]);
  }

  ngOnInit() {
    this.getTopUpcoming();
    this.getTopMovie();
    this.getTopTv();
    this.getTopAiring();
  }
}
