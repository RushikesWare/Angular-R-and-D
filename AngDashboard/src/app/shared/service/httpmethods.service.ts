import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainURL } from '../../constant/configUrl';


@Injectable({
  providedIn: 'root'
})
export class HttpmethodsService {

  baseUrl=MainURL.HostUrl;
  constructor( private http:HttpClient) { }
  

  postRequest(url,body) {
    
    return this.http.post(this.baseUrl+url,body)
  }
  getRequest(url){
    return this.http.get(this.baseUrl+url);
  }
  
  putRequest(url,body){
    return this.http.put(this.baseUrl+url,body)
  }

  deleteRequest(url,id){
    return this.http.delete(this.baseUrl+url+"/"+id);
  }
}
