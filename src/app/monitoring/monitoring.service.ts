import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { APPLICATION_MONITORING_MOCK } from './monitoring.mock';
import { ApplicationStatus, ApplicationStatusHttpResponse } from './monitoring.model';

@Injectable({
    providedIn: 'root'
})
export class MonitoringService {

    constructor(private http$: HttpClient) { }

    getApplicationsStatus(): Observable<ApplicationStatus[]> {
        return of<ApplicationStatusHttpResponse>(APPLICATION_MONITORING_MOCK)
            .pipe(
                map(httpResponse => httpResponse.monitor)
            );

        /*
        should be replaced by a real http call :
        return this.http$.get<ApplicationStatusHttpResponse>(config.statusUrl).pipe(
        .pipe(
            map(httpResponse => httpResponse.monitor)
        );    

        */
    }

}