import { Component, OnInit } from '@angular/core';
import { AnimeDetail } from 'src/app/api.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seasonal',
  templateUrl: './seasonal.component.html',
  styleUrls: ['./seasonal.component.scss']
})
export class SeasonalComponent implements OnInit {
  apiUrl: string = 'https://api.jikan.moe/v3';

  data: AnimeDetail[];
  constructor(private router: Router, private http: HttpClient) { }

  //api call for seasonal anime based on select inputs 
  getSeasonal() {
    return this.http
      .get<AnimeDetail[]>(
        `${this.apiUrl}/season/${this.selectedYear}/${this.selectedSeason}`
      )
      .subscribe(
        data => {
          this.data = data;
          console.log(data);
        },
        err => console.error(err),
        () => console.log('done loading details')
      );
  }
  //routing to corresponding anime detail page when clicked based on mal_id
  toDetailPage(data) {
    this.router.navigate(['/details', data.mal_id]);
  }

  //had to generate an array of years to limit the selection 
  public years;
  getYears() {
    this.years = {
      model: null,
      availableYears: []
    };
    var max = new Date().getFullYear(),
      min = max - 50,
      max = max + 1;

    for (var i = min; i <= max; i++) {
      this.years.availableYears.push({ id: i });
    }
    console.log(this.years);
  }
  selectedYear = new Date().getFullYear() || {};
 
//select input
  getUserInput() {
    if (this.selectedSeason != '' && this.selectedYear != {}) {
      this.getSeasonal();
    }
  }

//array for seasons 
  seasons = [
    { value: 'winter', season: 'Winter' },
    { value: 'spring', season: 'Spring' },
    { value: 'summer', season: 'Summer' },
    { value: 'fall', season: 'Fall' }
  ];

  //by default fall
  selectedSeason = 'fall' || '';

  ngOnInit() {
    this.getYears();
    this.getUserInput();
    console.log(this.selectedSeason);
  }
}
