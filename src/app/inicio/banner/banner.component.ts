import { Component, OnInit } from '@angular/core';
import SwiperCore, { EffectCoverflow, Pagination,Navigation ,Autoplay} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination,Navigation,Autoplay]);

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  


}
