import { catchError, Observable, of } from "rxjs";

const source = new Observable<string>((observer) => {
  observer.next("Valor inicial");
  observer.error("Ocurrió un error");
});

export const subscriptionOperatorCatchError = () => {
  source
  .pipe(
    catchError(() => {
      console.error('Error controlado desde el Operador');
      return of({ code: 'ERR001', msg: 'Error controlado' });
    })
  )  
  .subscribe({
    next: (data) => console.log("LA DATA RECIBIDA ES: ", data),
    error: (error) => console.log(error),
  });
};
