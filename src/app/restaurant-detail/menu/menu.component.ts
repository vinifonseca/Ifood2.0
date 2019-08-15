import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { MenuItem } from '../menu-item/menu-item.model';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu: MenuItem[] = [];

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.restaurantsService.getMenuByRestaurant(this.route.parent.snapshot.params.id).subscribe((items: MenuItem[]) => {
      this.menu = items;
    });
  }

  canActivateChild() {
    // Check Id

    return true;
  }
}
