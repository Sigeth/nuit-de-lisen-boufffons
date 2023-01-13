import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RoomRequest} from "../model/roomRequest";
import {Observable} from "rxjs";
import {Reservation} from "../model/reservation";
import {DoneReservation} from "../model/doneReservation";

@Injectable({
  providedIn: 'root'
})
export class RoomRequestsService {

  private url: string = "http://test.com/api"
  constructor(private http: HttpClient) { }

  requestRoomsByDate(roomRequest: RoomRequest): Observable<number[]> {
    return this.http.post<number[]>(`${this.url}/requestRoom`, roomRequest);
  }

  sendBook(reservation: Reservation): Observable<DoneReservation> {
    return this.http.post<DoneReservation>(`${this.url}/book`, reservation);
  }
}
