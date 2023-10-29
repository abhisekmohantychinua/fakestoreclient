import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  slides: Array<string> = [
    'https://img.myloview.com/posters/fashion-sale-banner-with-woman-fashion-outfit-online-shopping-social-media-voucher-or-web-template-with-beautiful-woman-winter-mood-blue-background-vector-illustration-700-146956902.jpg',
    'https://img.freepik.com/premium-vector/best-season-sale-banner-design-template_2239-1175.jpg',
    'https://images.template.net/108414/fashion-sale-banner-template-85svg.jpg',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-sale-banner-template-design-f7863ed31571a109d072a7dae4778ca1_screen.jpg?ts=1605627076',
  ];
  slideConfig = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
  };
}
