import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  apiUrl: string = 'https://api.jikan.moe/v3';
  constructor(private router: Router, private http: HttpClient) {}

  weekly;

  getSchedule() {
    return this.http.get(`${this.apiUrl}/schedule`).subscribe(
      weekly => {
        this.weekly = weekly;
        console.log(weekly);
      },
      err => console.error(err),
      () => console.log('done loading details')
    );
  }
  toDetailPage(data) {
    this.router.navigate(['/details', data.mal_id]);
  }

  ngOnInit() {
    this.getSchedule();
  }
}
