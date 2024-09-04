import { of } from "rxjs";
import { catchError, filter, map } from "rxjs/operators";

// Tenemos un observable que emite numeros del 1 al 10
const numeros = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const multiple = numeros.pipe(
  filter((numero) => numero % 2 === 0), // Filtrar números pares
  map((numero) => {
    if (numero === 8) {
      throw new Error("¡Error provocado!");
    }
    return numero * 2; // Multiplicar cada número par por 2
  }),
  catchError(() => of(-1))
);

// Nos suscribimos al observable
export const subscriptionMultipleOperators = () => {
  multiple.subscribe({
    next: (data) => console.log(data),
    error: (error) => console.log("Error: ", error),
  });
};
