import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService} from './services/http.service';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RetrieveallComponent } from './retrieveall/retrieveall.component';
import { XxxbetaxxxComponent } from './xxxbetaxxx/xxxbetaxxx.component';
import { NewrestaurantComponent } from './newrestaurant/newrestaurant.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { EditrestaurantComponent } from './editrestaurant/editrestaurant.component';
import { RetriveallproductsComponent } from './retriveallproducts/retriveallproducts.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { DisplayproductComponent } from './displayproduct/displayproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    RetrieveallComponent,
    XxxbetaxxxComponent,
    NewrestaurantComponent,
    ReviewsComponent,
    AddreviewComponent,
    EditrestaurantComponent,
    RetriveallproductsComponent,
    NewproductComponent,
    EditproductComponent,
    DisplayproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService, RetriveallproductsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
