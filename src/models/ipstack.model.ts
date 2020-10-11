import { IpStackLocation } from './ipstackLocation.model';

export class IpStack {
  city: string;
  continent_code: string;
  continent_name: string;
  country_code: string;
  country_name: string;
  ip: string;
  latitude: number;
  longitude: number;
  region_code: string;
  region_name: string;
  type: string;
  zip: string;
  location: IpStackLocation;
}
