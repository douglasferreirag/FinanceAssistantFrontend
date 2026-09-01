import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-home-component-header',
  imports: [MatToolbarModule, MatButtonModule, MatMenuModule],
  templateUrl: './home-component-header.html',
  styleUrl: './home-component-header.scss',
})
export class HomeComponentHeader {

   @Output() navigate = new EventEmitter<string>();

  goTo(route: string) {
    this.navigate.emit(route);
  }

}
