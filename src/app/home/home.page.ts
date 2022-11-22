import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  view = 'seg1';
  theme = 'ios';
  constructor() {}

  toggleTheme() {
    this.theme = this.theme === 'ios' ? 'md' : 'ios';
  }
}
