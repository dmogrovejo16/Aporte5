import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.page.html',
  styleUrls: ['./home-adm.page.scss'],
})

export class HomeAdmPage implements OnInit {

  constructor(private apiService:ApiService) { }
  nombre: string = localStorage.getItem("Name")!;

usuarios: any=[]

  ngOnInit() {
    }
  

}

