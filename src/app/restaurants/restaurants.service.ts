import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { Restaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { ReviewsModel } from '../restaurant-detail/reviews/reviews.modal';

@Injectable()
export class RestaurantsService {
  constructor(
    private router: Router,
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

//   restaurants(search?: string): Observable<Restaurant[]> {
//     return this.http.get(`${MEAT_API}/restaurants`, { params: { q: search } })
//       .map(response => response.json())
//       .catch(ErrorHandler.handleError)
//   }

//   restaurantById(id: string): Observable<Restaurant> {
//     return this.http.get(`${MEAT_API}/restaurants/${id}`)
//       .map(response => response.json())
//       .catch(ErrorHandler.handleError)
//   }

//   reviewsOfRestaurant(id: string): Observable<any> {
//     return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
//       .map(response => response.json())
//       .catch(ErrorHandler.handleError)
//   }

//   async locationOfRestaurant(id: string): Promise<any> {
//     const response = await this.http.get(`${MEAT_API}/location/${id}`)
//       .toPromise();
//     return response.json();
//   }

//   menuOfRestaurant(id: string): Observable<MenuItem[]> {
//     return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
//       .map(response => response.json())
//       .catch(ErrorHandler.handleError)
//   }

//   async checkRestaurantByID(id: string) {
//     return await this.http.get(`${MEAT_API}/restaurants/${id}`)
//       .toPromise()
//       .catch((err) => {
//         if (err.status == 404) {
//           this.router.navigate(['/restaurants'])
//         }
//       })
//   }

}
