import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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
