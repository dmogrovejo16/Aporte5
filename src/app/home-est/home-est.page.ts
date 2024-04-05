import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
@Component({
  selector: 'app-home-est',
  templateUrl: './home-est.page.html',
  styleUrls: ['./home-est.page.scss'],
})
export class HomeEstPage implements OnInit {

  constructor() { }
  nombre: string = localStorage.getItem("Name")!;
  ngOnInit() {
  }

}
