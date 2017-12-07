import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Wishlist } from '../../models/wishlist';

import 'rxjs/add/operator/map';

@Injectable()
export class WishListService {

  constructor(private http: Http) { }

  private serverApi= 'http://localhost:3000';

  public getAllWishlists():Observable<Wishlist[]> {

    let URI = `${this.serverApi}/api/wishes/handyana`;
    return this.http.get(URI)
      .map(res => res.json())
      .map(res => <Wishlist[]>res);
  }

}
