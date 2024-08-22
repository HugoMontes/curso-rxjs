import { Observable, debounceTime } from 'rxjs';

// Crear un observable de manera manual para 
// emitir datos (1, 2) inmediatamete se suscribe el observable
// y despues de 600 milisegundos se emite (3,4)
const source = new Observable((observer) => {
	observer.next(1);
	observer.next(2);

	setTimeout(() => {
		observer.next(3);
		observer.next(4);
	}, 600);
});

// Aplicamos debounceTime(500) para esperar 500 milisegundos después del último valor antes de emitirlo
const debouncedSource = source.pipe(debounceTime(500));

export const subscriptionOperatorDebounceTime = () => {
	// Nos suscribimos al observable resultante para recibir los valores después de aplicar debounceTime
	debouncedSource.subscribe((value) => console.log(value));
};