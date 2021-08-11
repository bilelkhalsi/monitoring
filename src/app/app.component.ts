import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { startWith, switchMap, tap } from 'rxjs/operators';
import { ApplicationStatus } from './monitoring/monitoring.model';
import { MonitoringService } from './monitoring/monitoring.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public servicesStatus$: Observable<ApplicationStatus[]>;

  constructor(private monitoring: MonitoringService) {

    this.servicesStatus$ = interval(60000)
      .pipe(
        startWith(1),
        tap(_any => console.log("Applications monitoring updated...")),
        switchMap(i => this.monitoring.getApplicationsStatus())
      );

  }


  infraSize(service: ApplicationStatus) {
    return (service.infras) ? service.infras.length + 1 : 1;
  }
}
