import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tabs = ['home', 'synthesis', 'workflow'];
  constructor(private router: Router) {}

  ngOnInit() {
    console.log('test');
  }

  tabChange(event: any) {
    console.log(this.tabs[event.index]);
    this.router.navigate([this.tabs[event.index]]);
  }
}
