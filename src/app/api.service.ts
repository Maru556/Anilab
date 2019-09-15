import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { SeasonalAnime } from "./api.model";

@Injectable()
export class ApiService {
  testUrl: string = "https://api.jikan.moe/v3";

  constructor(private http: HttpClient) {}

  getSeasonalAnimes(): Observable<SeasonalAnime[]> {
    console.log("Api Service works");
    return this.http.get<SeasonalAnime[]>(`${this.testUrl}/season/2019/summer`);
  }
}
