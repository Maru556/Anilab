import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiSearchUrl: string = 'https://api.jikan.moe/v3';
  constructor(private router: Router, private http: HttpClient) { }
  value = '';
  searchRes;

  getSearchResult(value: string) {
    this.value = value;
    return this.http
      .get(`${this.apiSearchUrl}/search/anime?q=${this.value}`)
      .subscribe(
        searchRes => {
          this.searchRes = searchRes;
          console.log(searchRes);
        },
        err => console.error(err),
        () => console.log('done loading details')
      );
  }
}
