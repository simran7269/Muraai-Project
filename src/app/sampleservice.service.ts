import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleserviceService {
  data: any;
  value: any;
 
  API_URL = 'http://localhost:3000/shopping';
  productUrl = 'http://localhost:3000/product';
  homeAUrl='http://localhost:3000/homeAppliances';
  elecAUrl='http://localhost:3000/electronicAppliances';
  clothURL='http://localhost:3000/clothing';

  private dataSubject$: Subject<Object>=new Subject();
  dataEvent$= this.dataSubject$.asObservable();
 
  constructor(private http: HttpClient) {

  }
  getshopping() {
     this.http.get(this.API_URL).subscribe(val=>{
      
      this.dataSubject$.next(val)
      this.data=val
    })
     
  }
  createOrder(data: any): Observable<any> {
    
    return this.http.post(this.API_URL, data)
  }
  deleteOrder(id: any): Observable<any> {

    return this.http.delete(`${this.API_URL}/${id}`);
  }


  editDetails(data: any) {
    return this.http.put(`${this.API_URL}/${data.sno}`, data);
  }
  getDetails(id: any) {
    return this.http.get(`${this.API_URL}/${id}`);
  }
  login(data: any): Observable<any> {
    return this.http.post('https://reqres.in/api/login', data)
  }

  getProductDetails() {
    return this.http.get(this.productUrl)
  }
  
  updateFavorites(data:any){
    const newData={
      ...data,
      fav: !data.fav
    }
    return this.http.put(`${this.API_URL}/${data.id}`, newData);
  }


  searchItem(value:any){
this.dataSubject$.next(
  this. data.filter((val:any)=>val.iname.toLowerCase().includes(value.toLowerCase()))
)
  }

  getclothing(){
    return this.http.get(this.clothURL)
  }

  gethomeAppliance(){
    return this.http.get(this.homeAUrl)
  }

  getelectronicAppliance(){
    return this.http.get(this.elecAUrl)
  }
}