import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {formatDate} from '@angular/common';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-retriveallproducts',
  templateUrl: './retriveallproducts.component.html',
  styleUrls: ['./retriveallproducts.component.css']
})
export class RetriveallproductsComponent implements OnInit {
  products: any = [];
  // rate: any = [{rating: "", customer:"", comment : ""}];
  enabledelete: any = [];
  selectedProduct : any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router 
    ) { }

  ngOnInit() {
    this.loadAllProducts();
  }
  loadAllProducts(){
    console.log("mine: LOAD ALL PRODUCTS INFORMATION");
    let observable = this._httpService.getProducts();
    observable.subscribe(data => {  
      console.log("mine: ALL PRODUCTS LOADED");
      console.log(data);
      this.products = data;
      for (const key in data) {
        var time = new Date().getTime() - new Date(data[key].createdAt).getTime();
        if (time/1000 > 30) this.products[key].deleteDisabled = true;
        else this.products[key].deleteDisabled = false;
        this.products[key].tableId = key;
        // this.rate.push({rating: 0, customer:"", comment : ""});   //Inline rating is not needed.
      }
    })
  }

  edit(i){
    console.log(this.products[i]._id);
    let id = this.products[i]._id;
    // this._router.navigate(['/products/'+id+'/edit']);
    this._router.navigate(['/products/'+ i +'/edit']);
  }
  
  display(i){
    console.log(this.products[i]._id);
    let id = this.products[i]._id;
    this.selectedProduct = this.products[i];
    // this._router.navigate(['/products/'+id]);
    this._router.navigate(['/products/'+ i]);
  }
 
}
