import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Results } from 'src/app/api.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  apiSearchUrl: string = 'https://api.jikan.moe/v3';
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }


  value = '';
  searchRes: Results[];

  getSearchResult(value: string) {
    this.value = value;
    return this.http
      .get<Results[]>(`${this.apiSearchUrl}/search/anime?q=${this.value}`)
      .subscribe(
        searchRes => {
          this.searchRes = searchRes;
          console.log(searchRes);
        },
        err => console.error(err),
        () => console.log('done loading details')
      );
  }
  ngOnInit() {
    let search = this.route.snapshot.paramMap.get("search");
    this.value = search
    this.getSearchResult(this.value);
  }
  ngDoChanges() {


  }

}
