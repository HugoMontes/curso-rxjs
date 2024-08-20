import { concat, Observable, of } from "rxjs";

// Creamos dos observables que emiten valores simples
const observable1 = of(1, 2, 3);
const observable2 = of("Hola");


// Función para simular la creación de un usuario en el servidor
function createUser(): Observable<any> {
	return new Observable((observer) => {
		// Supongamos que aquí realizaríamos una solicitud HTTP al servidor para crear un usuario
		setTimeout(() => {
			// observer.error();
			observer.next({ message: 'Usuario creado con éxito' });
			observer.complete();
		}, 5000); // Simulamos un retraso de 5 segundos para la operación
	});
}

// Función para simular el envío de un correo electrónico de confirmación
function sendConfirmationEmail(emailData: any): Observable<any> {
	return new Observable((observer) => {
		// Supongamos que aquí realizaríamos una solicitud HTTP al servidor para enviar el correo electrónico
		setTimeout(() => {
			observer.next({ message: 'Correo electrónico de confirmación enviado', emailData });
			observer.complete();
		}, 1500); // Simulamos un retraso de 1.5 segundos para la operación
	});
}

export const subscriptionOperatorConcat = () => {
  // Utilizamos el operador concat para combinar los observables
  // concat(observable1, observable2).subscribe({
  //   next: (value) => console.log(value)
  // });

  // Concatenación de las operaciones createUser y sendConfirmationEmail
  concat(createUser(), sendConfirmationEmail('ejemplo@correo.com')).subscribe({
    next: (response) => {
      console.log('Response: ', response);
      // Aquí puedes manejar la respuesta, por ejemplo, redirigiendo al usuario a una página de confirmación.
    },
    error: (error) => {
      console.log('Error: ', error);
      // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje de error al usuario.
    }
  });
};
