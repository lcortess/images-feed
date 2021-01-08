import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Image {
  id: number;
  url: string;
  width: number;
  height: number;
  author: string;
  download_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  /**
   * Fetch a  bunch of images from the API
   * 
   * @description GET /list
   * @param page Number of page to fetch. 1 by default
   */
  public list(page: number = 1): Observable<Image[]> {
    return this.http.get<Image[]>('/list', {
      params: {
        page: String(page)
      }
    })
  }
}
