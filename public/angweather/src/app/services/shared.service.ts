import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {
    
    // Observable string source
    private cityAnnouncedSource = new Subject<string>();


    // Observable string stream
    cityAnnounced$ = this.cityAnnouncedSource.asObservable();

    // Service message command
    announceCity(city: string) {
        this.cityAnnouncedSource.next(city);
    }
}
