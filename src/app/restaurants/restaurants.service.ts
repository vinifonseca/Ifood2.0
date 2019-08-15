import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { Restaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { ReviewsModel } from '../restaurant-detail/reviews/reviews.modal';

@Injectable()
export class RestaurantsService {
  constructor(
    private db: AngularFireDatabase
    ) { }

  getRestaurants(): Observable<any> {
      return this.db.list<Restaurant[]>('restaurants').valueChanges();
  }

  getRestaurantsById(id: string): Observable<any> {
    return this.db.list<Restaurant[]>(`restaurants`, ref => ref.orderByChild('id').equalTo(id)).valueChanges();
  }

  getMenuByRestaurant(restId: string): Observable<any> {
    return this.db.list<MenuItem[]>(`menu`, ref => ref.orderByChild('restaurantId').equalTo(restId)).valueChanges();
  }

  getReviewsByRestaurant(restId: string): Observable<any> {
    return this.db.list<ReviewsModel[]>(`reviews`, ref => ref.orderByChild('restaurantId').equalTo(restId)).valueChanges();
  }
}
