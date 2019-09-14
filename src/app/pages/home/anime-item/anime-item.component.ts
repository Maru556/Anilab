import { Component, OnInit } from "@angular/core";
import { Anime } from "../../../api.model";
import { ApiService } from "../../../api.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-anime-item",
  templateUrl: "./anime-item.component.html",
  styleUrls: ["./anime-item.component.scss"]
})
export class AnimeItemComponent implements OnInit {
  private anime: Anime[] = [];
  private animeObservable: Observable<Anime[]>;

  
  constructor(private apiService: ApiService) {}

  ngOnInit() {}
}
