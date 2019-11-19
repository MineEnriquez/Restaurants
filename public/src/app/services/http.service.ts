import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }
  getRestaurants() {
    return this._http.get('/api/restaurants/retrieveall'); 
  }
  newRestaurant(data: any) {
    return this._http.post('/api/restaurants/newrestaurant', data); 
  }
  restaurantDelete(id: any) {
    return this._http.delete('/api/restaurants/Delete/' + id);
  }
  restaurantEdit(id:any, data: any) {
    return this._http.post('/api/restaurants/Update/'+ id, data);
  }
  rateRestaurant(id:any, data: any) {
    console.log(data);
    return this._http.post('/api/restaurants/addrating/'+ id, data);
  }
  getById(id:any) {
    console.log("Get Restaurant by Id", id);
    return this._http.get('/api/restaurants/retrieveId/' + id); /* Same with this one */
  }
  e2endtest(num: any) {
    return this._http.post('/e2etest', num);
  }
  
  //Products
  getProducts() {
    return this._http.get('/api/products/retrieveall'); 
  }
  newProduct(data: any) {
    return this._http.post('/api/products/newproduct', data); 
  }
  productDelete(id: any) {
    return this._http.delete('/api/products/Delete/' + id);
  }
  productEdit(id:any, data: any) {
    return this._http.post('/api/products/Update/'+ id, data);
  }
  getProductById(id:any) {
    console.log("Get Product by Id", id);
    return this._http.get('/api/products/retrieveId/' + id); /* Same with this one */
  }
}