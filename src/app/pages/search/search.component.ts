import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Results } from 'src/app/api.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  apiSearchUrl: string = 'https://api.jikan.moe/v3';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  value = '';
  searchRes: Results[];

  //user input in search field gets parsed to url by getParameter, and will now be used by getSearchResult to request an api call
  getSearchResult(value: string) {
    this.value = value;
    return this.http
      .get<Results[]>(`${this.apiSearchUrl}/search/anime?q=${this.value}`)
      .subscribe(
        searchRes => {
          this.searchRes = searchRes;
          //console.log(searchRes);
        },
        err => console.error(err),
        () => console.log('done loading search request')
      );
  }
  //routing to detail page of corrresponding anime when clicked
  toDetailPage(data) {
    this.router.navigate(['/details', data.mal_id]);
  }

  //getting the search value for getSearchResult from URL
  ngOnInit() {
    let search = this.route.snapshot.paramMap.get('search');
    this.value = search;
    this.getSearchResult(this.value);
  }
}
