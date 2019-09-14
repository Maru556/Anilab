import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApiService {
  baseUrl: string = "https://api.jikan.moe/v3/meta";

  constructor(private http: HttpClient) {}

  get_detailed() {
    return this.http.get(this.baseUrl + "/anime");
  }

  get_top_airing() {
    return this.http.get(this.baseUrl + "/top/upcoming");
  }
}
