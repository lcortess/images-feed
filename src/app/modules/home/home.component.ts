import { Component, HostListener, OnInit } from '@angular/core';
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
  public isLoading: boolean = false;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getImages();
  }

  /**
   * Listen for the scroll event to load more images while scrolling
   * 
   * @param $event 
   */
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    const scrollHeight: number = document.documentElement.scrollHeight;
    const scrollPage: number = window.innerHeight + $event.target['scrollingElement'].scrollTop;
    
    // fire if the scroll position is 200px above the bottom load more
    if( scrollPage > scrollHeight - 200 ) {
      this.getImages()
    }

  }

  /**
   * Fetch images from the API
   */
  private getImages(): void {
    // If is already getting images exit the function
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.api.images.list(this.page++).subscribe((images) => {
      this.images.push(...images);
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      alert('Error fetching images');
    });
  }
}
