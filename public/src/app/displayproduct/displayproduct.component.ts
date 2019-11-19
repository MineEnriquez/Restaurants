import { Component, OnInit } from '@angular/core';
import { RetriveallproductsComponent } from "../retriveallproducts/retriveallproducts.component";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-displayproduct',
  templateUrl: './displayproduct.component.html',
  styleUrls: ['./displayproduct.component.css']
})
export class DisplayproductComponent implements OnInit {
  selectedproduct: any = { name: "", price: 0, quantity: 0};
  products: any;
  pd : any;
  isNotZero : Boolean;
  i: any;
  _id : any = 0;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _allproducts: RetriveallproductsComponent,
  ) { }


  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log("retrieving information for....")
      console.log(params['id'])
      this.i = params['id'];
    });
   this.fillupinfo();
  }
  
  fillupinfo() {
    //this.products = this._allproducts.loadAllProducts();

    let observable = this._httpService.getProducts();
    observable.subscribe(data => {  
      this.products = data;
      this.selectedproduct = this.products[this.i];
      if(Number(this.selectedproduct.quantity) == 0)
       {
         this.isNotZero = Boolean(false);
         console.log(this.isNotZero);
      }
      else{
        this.isNotZero = Boolean(true);
        console.log(this.isNotZero);
      }
    })
  }

  onBack(){
    this._router.navigate(['/products']);
  }
  onDelete(){
    let id = this.selectedproduct._id
    let observable = this._httpService.productDelete(id);
    observable.subscribe(data => {  
      console.log("Result of invoking Newtask route:", data);
      console.log(data);
      this._router.navigate(['/products']);
    })
  }
}
