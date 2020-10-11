import { Component, OnInit } from '@angular/core';
import { IpService } from 'src/services/ip.service';
import { Subscription } from 'rxjs';
import { IpStack } from 'src/models/ipstack.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(private ipService: IpService) {}
  /** Variable to store all our subscriptions so we easy can unsubscripe */
  private subscriptions: Subscription = new Subscription();
  /** The ip address */
  public ipAddress: string;
  /** information from the ip address */
  public ipInformation: IpStack = null;

  ngOnInit(): void {
    this.subscriptions.add(
      this.ipService.get().subscribe(data => {
        if (data !== null) {
          this.ipAddress = data.ip;
          if (this.ipAddress && this.ipAddress !== '') {
            this.getInformationFromIp(this.ipAddress);
          }
        }
      })
    );
  }

  getInformationFromIp(ip: string) {
    this.subscriptions.add(
      this.ipService.getFromIp(ip).subscribe(ipInformation => {
        if (ipInformation.city !== null) {
          this.ipInformation = ipInformation;
        } else {
          this.ipInformation = null;
        }
      })
    );
  }

  valuechange(newValue) {
    let regex = new RegExp('^(?:[0-9]{1,3}.){3}[0-9]{1,3}$');
    if (regex.test(newValue)) {
      this.getInformationFromIp(newValue);
    }
  }
}
