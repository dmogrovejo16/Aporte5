import { Component, inject } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private plataform: Platform) {
  
  }
}


