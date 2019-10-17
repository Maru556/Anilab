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

  //api call to get the schedule for the week
  getSchedule() {
    return this.http.get(`${this.apiUrl}/schedule`).subscribe(
      weekly => {
        this.weekly = weekly;
        //console.log(weekly);
      },
      err => console.error(err),
      () => console.log('done loading details')
    );
  }
  //routing to clicked anime detail page based on its mal_id from the url
  toDetailPage(data) {
    this.router.navigate(['/details', data.mal_id]);
  }

  ngOnInit() {
    this.getSchedule();
  }
}
