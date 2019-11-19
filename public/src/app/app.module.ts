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

@NgModule({
  declarations: [
    AppComponent,
    RetrieveallComponent,
    XxxbetaxxxComponent,
    NewrestaurantComponent,
    ReviewsComponent,
    AddreviewComponent,
    EditrestaurantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
