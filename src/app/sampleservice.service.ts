import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { cards, shopping } from './model';

@Injectable({
  providedIn: 'root'
})
export class SampleserviceService {
  data: shopping[]=[];
  value: any;
 
  API_URL = 'http://localhost:3000/shopping';
  productUrl = 'http://localhost:3000/clothing';

  private dataSubject$: Subject<shopping[]>=new Subject();
  dataEvent$= this.dataSubject$.asObservable();
 
  constructor(private http: HttpClient) {

  }
  getshopping() {
     this.http.get(this.API_URL).subscribe((val:any)=>{
      
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

  getProductDetails():Observable<cards[]> {
    return this.http.get<cards[]>(this.productUrl)
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
}