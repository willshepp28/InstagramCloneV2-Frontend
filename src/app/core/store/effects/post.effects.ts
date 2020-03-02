import { Router } from "@angular/router";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';



@Injectable()
export class PostEffects {

  constructor(
    private actions: Actions,
    private router: Router
  ){}

}
