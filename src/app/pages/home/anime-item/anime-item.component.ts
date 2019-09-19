import { Component, OnInit } from "@angular/core";

import { SeasonalAnime, AnimeDetail } from "src/app/api.model";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: "app-anime-item",
  templateUrl: "./anime-item.component.html",
  styleUrls: ["./anime-item.component.scss"]
})
export class AnimeItemComponent implements OnInit {
  apiUrl: string = "https://api.jikan.moe/v3";

  data: SeasonalAnime[];
  constructor(private router: Router, private http: HttpClient) { }
  ngOnInit() {
    this.getSeasonal();
  }
  getSeasonalAnimes(): Observable<SeasonalAnime[]> {
    console.log("api call works");
    return this.http.get<SeasonalAnime[]>(`${this.apiUrl}/season/2019/summer`);
  }
  getSeasonal() {
    this.getSeasonalAnimes().subscribe(
      data => {
        this.data = data;
        console.log(data);
      },
      err => console.error(err),
      () => console.log("done loading details")
    );
  }
  toDetailPage(data) {
    this.router.navigate(["/details", data.mal_id]);
  }
}
