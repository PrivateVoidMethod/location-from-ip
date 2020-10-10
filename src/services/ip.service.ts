import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IpService {

  constructor(private http: HttpClient) { }

  get(ip: string) {
    let url = environment.ipApiUrl + ip + "?access_key=926fccdfec9e7b7625a70449afc3c3c2"
    return this.http.get(url);
  }

}