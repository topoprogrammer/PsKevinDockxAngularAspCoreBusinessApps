import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Tour } from './tour.model';
import { BaseService } from '../../shared/base.service';

@Injectable()
export class TourService extends BaseService {

    constructor(private http: HttpClient) {
        super();
    }

    getTours(): Observable<Tour[]> {
        return this.http.get<Tour[]>(`${this.apiUrl}/tours`);
    }

    getTour(tourId: string): Observable<Tour> {
        return this.http.get<Tour>(`${this.apiUrl}/tours/${tourId}`);
    }
}
