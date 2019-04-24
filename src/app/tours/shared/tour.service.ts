import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Tour } from './tour.model';
import { BaseService } from '../../shared/base.service';
import { TourWithEstimatedProfits } from './tour-with-estimated-profits.model';
import { TourForCreation } from './tour-for-creation.model';
import { TourWithManagerForCreation } from './tour-with-manager-for-creation.model';

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

  getTourWithEstimatedProfits(tourId: string): Observable<TourWithEstimatedProfits> {
    return this.http.get<TourWithEstimatedProfits>(`${this.apiUrl}/tours/${tourId}`,
      { headers: { 'Accept': 'application/vnd.marvin.tourwithestimatedprofits+json' } });
  }

  addTour(tourToAdd: TourForCreation): Observable<Tour> {
    return this.http.post<Tour>(`${this.apiUrl}/tours`, tourToAdd,
      { headers: { 'Content-Type': 'application/json' } });
  }

  addTourWithManager(tourToAdd: TourWithManagerForCreation): Observable<Tour> {
    return this.http.post<Tour>(`${this.apiUrl}/tours`, tourToAdd,
      { headers: { 'Content-Type': 'application/vnd.marvin.tourwithmanagerforcreation+json' } });
  }
}
