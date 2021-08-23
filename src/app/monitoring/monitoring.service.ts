import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { APPLICATION_MONITORING_MOCK } from './monitoring.mock';
import { ApplicationInfras, ApplicationStatus, ApplicationStatusHttpResponse } from './monitoring.model';

function transformApplicationStatusHttpResponse(httpResponse: ApplicationStatusHttpResponse): ApplicationStatus[] {
    if (!httpResponse || !httpResponse.length) {
        return [];
    }
    const byApplicationName = httpResponse
        .map(app => app.monitor)
        .reduce((acc, app) => {
            let infras: ApplicationInfras = [];
            const existing = acc.get(app.application);
            if (existing) {
                infras = [...existing.infras];
                infras.push(app.infras);
            } else {
                infras = [app.infras];
            }
            acc.set(app.application, {
                ...app,
                infras
            });
            return acc;
        }, new Map<string, ApplicationStatus>());
    return Array.from([...byApplicationName.values()]);
}

@Injectable({
    providedIn: 'root'
})
export class MonitoringService {

    constructor(private http$: HttpClient) { }

    getApplicationsStatus(): Observable<ApplicationStatus[]> {
        return of<ApplicationStatusHttpResponse>(APPLICATION_MONITORING_MOCK)
            .pipe(
                map(transformApplicationStatusHttpResponse)
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