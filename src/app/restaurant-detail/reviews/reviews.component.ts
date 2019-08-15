import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/restaurants/restaurants.service';
import { ReviewsModel } from './reviews.modal';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews: ReviewsModel[] = [];

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.restaurantsService.getReviewsByRestaurant(this.route.parent.snapshot.params.id).
    subscribe((reviews: ReviewsModel[]) => this.reviews = reviews);
  }

}
