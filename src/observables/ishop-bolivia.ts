import { Observable } from "rxjs";

export const iShopBoliviaLaPaz = new Observable<string>((subscriber) => {
  // subscriber.next(5);
  subscriber.next("Aun no tenemos el iphone 16 :(");
  setInterval(() => subscriber.next("Mantengase a la espera."), 500);

  //#region COMPLETE
  // setTimeout(() => {
  //     subscriber.next('El nuevo iphone ya esta disponible :)');
  //     subscriber.complete();
  //     subscriber.next('Puedes pasar por nuestra tienda.');
  // }, 2000);
  //#endregion

  //#region ERROR
//   setTimeout(() => {
//       subscriber.error('Hubo un problema en nuestros servidores.');
//       subscriber.next('Gracias por su comprension');
//   }, 2000);
  //#endregion

  //#region UNSUBSCRIBE
//   setTimeout(() => {
//     subscriber.next("Hemos decidido cancelar su suscripcion");
//     subscriber.unsubscribe();
//     subscriber.next("Comuniquese con nosotros");
//   }, 2000);
  //#endregion
});

export const iShopBoliviaOruro = (activateUnsubscribe: boolean) => {
  return new Observable<string>((subscriber) => {
    subscriber.next("Aun no tenemos el iphone 16 :(");

    setInterval(() => subscriber.next("Mantengase a la espera"), 500);

    if (activateUnsubscribe) {
      setTimeout(() => {
        subscriber.next("El nuevo iphone ya esta disponible, por lo tanto hemos decidido cancelar su suscripción");
        subscriber.unsubscribe();
      }, 2000);
    }
  });
};
