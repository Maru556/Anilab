import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AnimeDetail, Pictures } from "../../api.model";
@Component({
  selector: "app-anime-details",
  templateUrl: "./anime-details.component.html",
  styleUrls: ["./anime-details.component.scss"]
})
export class AnimeDetailsComponent implements OnInit {
  //api url to connect to MAL
  apiUrl: string = "https://api.jikan.moe/v3";

  //api call to get anime details based on the id that was passed
  getApiDetails(): Observable<AnimeDetail[]> {
    console.log("api call works");
    return this.http.get<AnimeDetail[]>(`${this.apiUrl}/anime/${this.animeId}`);
  }
  getPictures(): Observable<Pictures[]> {
    console.log("api call works 2");
    return this.http.get<Pictures[]>(
      `${this.apiUrl}/anime/${this.animeId}/pictures`
    );
  }
  img: Pictures[];
  data: AnimeDetail[];
  public animeId;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.animeId = id;

    this.getAnimeDetails();
    this.getAnimePictures();
  }
  getAnimeDetails() {
    this.getApiDetails().subscribe(
      data => {
        this.data = data;
        console.log(data);
      },
      err => console.error(err),
      () => console.log("done loading details")
    );
  }
  getAnimePictures() {
    this.getPictures().subscribe(
      data => {
        this.img = data;
        console.log(data);
      },
      err => console.error(err),
      () => console.log("done loading pictures")
    );
  }
}
