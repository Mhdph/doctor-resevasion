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
    title: 'hi,bye,nye',
    subtitle: '',
  });

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      src: 'https://i.ibb.co/Rcj3NDW/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker-1.jpg',
      title: 'محمد',
      subtitle:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد ',
    };
    this.slides[1] = {
      src: 'https://i.ibb.co/Fb85tfQ/istockphoto-1183048029-612x612.jpg',
      title: 'فاطمه',
      subtitle:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد ',
    };
    this.slides[2] = {
      src: 'https://i.ibb.co/Rcj3NDW/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker-1.jpg',
      title: 'علی',
      subtitle:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد ',
    };
  }
}
