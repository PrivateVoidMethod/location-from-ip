import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IpStack } from 'src/models/ipstack.model';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  constructor(private http: HttpClient) {}

  /** Fetch Ip of current user */
  get() {
    let url = environment.ipifyUrl + '?format=json';
    return this.http.get<any>(url);
  }

  /** Fetch information from the ip provided */
  getFromIp(ip: string) {
    let url =
      environment.ipstackApiUrl +
      ip +
      '?access_key=' +
      environment.ipstackApiKey;
    return this.http.get<IpStack>(url);
  }
}
