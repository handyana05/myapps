import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { ViewListComponent } from './view-list/view-list.component';
import { WishListService } from './services/wishlist/wish-list.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    WishListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
