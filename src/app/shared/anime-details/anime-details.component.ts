import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimeDetail, Pictures, Characters } from '../../api.model';
import { DomSanitizer } from '@angular/platform-browser';
import { BookmarkService } from '../bookmark.service';
import { AuthService } from 'src/app/authentication/services/auth.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.scss']
})
export class AnimeDetailsComponent implements OnInit {
  apiUrl: string = 'https://api.jikan.moe/v3';

  public animeId;

  //api call to get anime details based on the id that was passed
  getApiDetails(): Observable<AnimeDetail[]> {
    return this.http.get<AnimeDetail[]>(`${this.apiUrl}/anime/${this.animeId}`);
  }
  getAnimeDetails() {
    this.getApiDetails().subscribe(
      data => {
        this.data = data;
        //console.log(data);
      },
      err => console.error(err),
      () => console.log('done loading details')
    );
  }
  data: AnimeDetail[];

  //api call to get pictures based on id
  getPictures(): Observable<Pictures[]> {
    return this.http.get<Pictures[]>(
      `${this.apiUrl}/anime/${this.animeId}/pictures`
    );
  }
  getAnimePictures() {
    this.getPictures().subscribe(
      img => {
        this.img = img;
        //console.log(img);
      },
      err => console.error(err),
      () => console.log('done loading pictures')
    );
  }
  img: Pictures[];

  //api call to get character info based on id
  getCharacters(): Observable<Characters[]> {
    return this.http.get<Characters[]>(
      `${this.apiUrl}/anime/${this.animeId}/characters_staff`
    );
  }
  getAnimeCharacters() {
    this.getCharacters().subscribe(
      info => {
        this.info = info;
        //console.log(info);
      },
      err => console.log(err),
      () => console.log('done loading characters')
    );
  }
  info: Characters[];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    public bmService: BookmarkService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    //getting the id from routing
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.animeId = id;

    this.getAnimeDetails();
    this.getAnimePictures();
    this.getAnimeCharacters();
  }
}
