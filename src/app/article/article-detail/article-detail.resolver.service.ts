
import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { NytimesService } from 'src/app/service/nytimes.service';
import { Observable, of, EMPTY } from 'rxjs';
import { take, mergeMap, catchError } from 'rxjs/operators'

@Injectable()
export class ArticleDetailResolverService {

    constructor(private nytimesService: NytimesService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
        let url = route.paramMap.get('url');
        console.log(url);

        return this.nytimesService.getNytimesBySearch(url).pipe(catchError(err => {
            return EMPTY;
        }), mergeMap(res => {
            if (res) {
                return of(res);
            } else {
                return EMPTY;
            }
        }))
    }

}