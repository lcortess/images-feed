import { Injectable } from '@angular/core';
import { ImagesService } from './services/images.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public images: ImagesService) { }
}
