import { Component, OnInit } from '@angular/core';
import {
  AnimeDetail,
  TopUpcoming,
  TopAiring,
  TopTV,
  TopMovies
} from 'src/app/api.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-top-anime',
  templateUrl: './top-anime.component.html',
  styleUrls: ['./top-anime.component.scss']
})
export class TopAnimeComponent implements OnInit {
  apiUrl: string = 'https://api.jikan.moe/v3';

  dataUp: TopUpcoming[];
  dataAir: TopAiring[];
  dataTv: TopTV[];
  dataMov: TopMovies[];
  constructor(private router: Router, private http: HttpClient) {}

  getTopUpcoming() {
    return this.http
      .get<TopUpcoming[]>(`${this.apiUrl}/top/anime/1/upcoming`)
      .subscribe(
        dataUp => {
          this.dataUp = dataUp;
          console.log(dataUp);
        },
        err => console.error(err),
        () => console.log('done loading details')
      );
  }
  getTopAiring() {
    return this.http
      .get<TopAiring[]>(`${this.apiUrl}/top/anime/1/airing`)
      .subscribe(
        dataAir => {
          this.dataAir = dataAir;
          console.log(dataAir);
        },
        err => console.error(err),
        () => console.log('done loading details')
      );
  }

  getTopTv() {
    return this.http.get<TopTV[]>(`${this.apiUrl}/top/anime/1/tv`).subscribe(
      dataTv => {
        this.dataTv = dataTv;
        console.log(dataTv);
      },
      err => console.error(err),
      () => console.log('done loading details')
    );
  }

  getTopMovie() {
    return this.http
      .get<TopMovies[]>(`${this.apiUrl}/top/anime/1/movie`)
      .subscribe(
        dataMov => {
          this.dataMov = dataMov;
          console.log(dataMov);
        },
        err => console.error(err),
        () => console.log('done loading details')
      );
  }
  toDetailPage(data) {
    this.router.navigate(['/details', data.mal_id]);
  }
  tabChange(tab) {
    if (tab === 0) {
      this.getTopUpcoming();
    }
    if (tab === 1) {
      this.getTopAiring();
    }
    if (tab === 2) {
      this.getTopTv();
    }
    if (tab === 3) {
      this.getTopMovie();
    }
  }

  ngOnInit() {
    this.getTopUpcoming();
  }
}
