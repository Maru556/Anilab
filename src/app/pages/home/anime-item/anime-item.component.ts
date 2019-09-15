import { Component, OnInit } from "@angular/core";

import { ApiService } from "../../../api.service";
import { SeasonalAnime } from "src/app/api.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-anime-item",
  templateUrl: "./anime-item.component.html",
  styleUrls: ["./anime-item.component.scss"]
})
export class AnimeItemComponent implements OnInit {
  data: SeasonalAnime[];

  constructor(private apiService: ApiService, private router: Router) {}
  ngOnInit() {
    this.getSeasonalAnimes();
  }
  getSeasonalAnimes() {
    this.apiService.getSeasonalAnimes().subscribe(
      data => {
        this.data = data;
        console.log(data);
      },
      err => console.error(err),
      () => console.log("done loading foods")
    );
  }
  toDetailPage(data) {
    this.router.navigate(["/details", data.mal_id]);
  }
}
