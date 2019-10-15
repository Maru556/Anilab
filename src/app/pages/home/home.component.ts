import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }

  value = '';

  //The value entered in the input will be parsed to the url. On the search page the value gets used in an api call and the corresponding results will be displayed
  getSearchPara(value: string) {
    this.value = value;
    this.router.navigate(['/search', value]);
  }

  ngOnInit() { }
}
