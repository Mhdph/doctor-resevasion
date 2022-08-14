import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      src: 'https://i.ibb.co/Rcj3NDW/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker-1.jpg',
    };
    this.slides[1] = {
      src: 'https://i.ibb.co/Rcj3NDW/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker-1.jpg',
    };
    this.slides[2] = {
      src: 'https://i.ibb.co/Rcj3NDW/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker-1.jpg',
    };
  }
}
