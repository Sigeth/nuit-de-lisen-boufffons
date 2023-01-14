import { Component } from '@angular/core';
import {RoomRequestsService} from "../../../service/room-requests.service";
import {RoomRequest} from "../../../model/roomRequest";

@Component({
  selector: 'app-reserv-dispos',
  templateUrl: './reserv-dispos.component.html',
  styleUrls: ['./reserv-dispos.component.css']
})
export class ReservDisposComponent {

  available_rooms: number[] = []
  constructor(private roomRequestService: RoomRequestsService) { }

  dateRangeChange(startDate: HTMLInputElement, endDate: HTMLInputElement): void {
    const roomRequest: RoomRequest = {
      start_date: startDate.value,
      end_date: endDate.value
    };

    console.log(roomRequest);
    this.roomRequestService.requestRoomsByDate(roomRequest).subscribe({
      next: (data) => {
        this.available_rooms = data;
      }
    });
  }
}
