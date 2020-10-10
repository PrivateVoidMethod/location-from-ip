import { Component, OnInit } from '@angular/core';
import { IpService } from 'src/services/ip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'location-from-ip';

  constructor(private ipService: IpService) {}

  ngOnInit(): void {
    this.ipService.get("178.155.234.220").subscribe((ipData) => {
      console.log(ipData)
    })
  }
}
