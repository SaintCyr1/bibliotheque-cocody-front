import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images: Array<any> = [
    '../../../../assets/images/banner/1.jpg'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
