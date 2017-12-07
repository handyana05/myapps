import { Component, OnInit } from '@angular/core';

import { WishListService } from '../services/wishlist/wish-list.service';
import { Wishlist } from '../models/wishlist';


@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {

  //lists propoerty which is an array of List type
  private wishlists: Wishlist[] = [];

  constructor(private wishlistService: WishListService) { }

  ngOnInit() {
    this.loadWishlists();
  }

  public loadWishlists() {
    this.wishlistService.getAllWishlists().subscribe(response => { this.wishlists = response; console.log(response); });
  }



}
