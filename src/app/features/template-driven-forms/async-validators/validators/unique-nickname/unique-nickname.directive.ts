import { Directive, forwardRef } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appUniqueNickname]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UniqueNicknameDirective),
      multi: true,
    },
  ],
})
export class UniqueNicknameDirective implements AsyncValidator {
  validate(
    control: AbstractControl,
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Observable((observer) => {
      if (control.value === 'teste') {
        observer.next({
          isNicknameTaken: true,
        });
      } else {
        observer.next(null);
      }

      observer.complete();
    });
  }
}
