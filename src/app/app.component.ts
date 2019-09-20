import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-project';
  selectedMenu = 'Recipes';

  onNavigate(selectedMenu: string) {
    this.selectedMenu = selectedMenu;
    // if (event.value) {

    // }
  }


}
