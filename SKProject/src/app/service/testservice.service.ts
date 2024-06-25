// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class testService {
  private activeCardSubject = new BehaviorSubject<any>(null);
  activeCard$ = this.activeCardSubject.asObservable();

  setActiveCard(cardId: any) {
    this.activeCardSubject.next(cardId);
  }

//   clearActiveCard() {
//     this.activeCardSubject.next(null);
//   }
}
