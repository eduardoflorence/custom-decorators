import { Subject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

// Decorator Factory
export function Timeout(milissegundos: number): MethodDecorator {
  // Decorator Function
  return (target: any, key: string, descriptor: PropertyDescriptor) => {

    const originalMethod = descriptor.value;

    // override original method
    descriptor.value = function(...args: any[]): void {
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, milissegundos);
    };

    return descriptor;

  };
}

// ------------------------------------------------------------------------------

export const estadoCache$ = new Subject<any[]>();

export function Cacheable(): MethodDecorator {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {

    const originalMethod = descriptor.value;

    let cache: any;
    console.log('assinou o cache');
    estadoCache$.subscribe((response) => cache = response);

    descriptor.value = function(...args: any[]): Observable<any> {

      if (cache) {
        return of(cache);
      }

      const response$ = (originalMethod.apply(this, args) as Observable<any>)
        .pipe(
          tap(response => {
            estadoCache$.next(response);
          })
        );

      return response$;

    };

    return descriptor;

  };
}
