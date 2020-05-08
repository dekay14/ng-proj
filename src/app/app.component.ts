import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-proj';
  page = 'recipe';

  displayPage(page: string) {
    this.page = page;
  }
}
