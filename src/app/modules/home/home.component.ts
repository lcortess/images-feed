import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Image } from '../api/services/images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public page = 1;
  public images: Array<Image> = [];

  constructor() { }

  ngOnInit(): void {
  }
}
