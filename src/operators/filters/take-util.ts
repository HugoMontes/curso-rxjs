import { Observable, Subject, takeUntil } from 'rxjs';

const unsubscribe$ = new Subject<void>();

// Crear un observable manualmente que emita un valor cada segundo.
const observable = new Observable<number>((observer) => {
	let count = 0;
	let intervalId = setInterval(() => {
		observer.next(count++);
	}, 1000);

	// Retornamos una función de limpieza para cancelar el intervalo 
	// cuando se complete o se cancele la suscripción
	return () => {
		clearInterval(intervalId);
	};
});

export const subscriptionOperatorTakeUntil = () => {
	const obs1 = observable.pipe(takeUntil(unsubscribe$)).subscribe((value) => console.log(value));
	const obs2 = observable.pipe(takeUntil(unsubscribe$)).subscribe((value) => console.log(value));
	const obs3 = observable.pipe(takeUntil(unsubscribe$)).subscribe((value) => console.log(value));

	setTimeout(() => {
		// obs1.unsubscribe();
		// obs2.unsubscribe();
		// obs3.unsubscribe();
		console.log('CANCELANDO TODAS LAS SUSCRIPCIONES');
		unsubscribe$.next(); // Emitir un valor para cancelar las suscripciones.
		unsubscribe$.unsubscribe(); // Completar y liberar el Subject.
	}, 3000);
};