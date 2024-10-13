import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImprintService {
  public imprintVisible$ = new BehaviorSubject<boolean>(false);

  toggleImprint() {
    this.imprintVisible$.next(!this.imprintVisible$.value);
  }

  closeImprint() {
    this.imprintVisible$.next(false);
  }
}
