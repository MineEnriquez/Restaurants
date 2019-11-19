import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  selectedrestaurant: any = { name: "", cusine: "", averagerating: "", arrayratings: [{ customer: "", rating: 0, comment: "" }] };

  id: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params['id'];
    });

    this.fillupinfo();
  }
  fillupinfo() {
    console.log("Display information about one restaurant");
    
    //let observable = this._httpService.getById({ id: this.id });
    let observable = this._httpService.getById(this.id);
    observable.subscribe(info => {
      console.log(info);
      let gotdata: any = info;
      this.selectedrestaurant = gotdata.data;
      console.log("-------Got our data! ", this.id, this.selectedrestaurant)
    });
  }
  addreview(){
    let url = '/restaurants/' + this.id + '/review';
    this._router.navigate([url]);
  }

}
