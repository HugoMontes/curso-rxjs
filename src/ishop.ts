import { iShopBoliviaOruro } from "./observables/ishop-bolivia";

export const iShopSubscriptions = () => {
    
  // ELIMINAMOS LA SUSCRIPCION
  iShopBoliviaOruro(true).subscribe({
    next: (data) => {
      console.log(data);
    },
    complete: () => {
      console.log("Completado");
    },
    error: (error) => {
      console.log("error: ", error);
    },
  });

  // MANTENEMOS LA SUSCRIPCION
  const subscription = iShopBoliviaOruro(false).subscribe({
    next: (data) => {
      console.log(data);
    },
    complete: () => {
      console.log("Completado");
    },
    error: (error) => {
      console.log("error: ", error);
    },
  });

  setTimeout(() => {
    console.log("Cancelando la subscripción desde el Subscriptor");
    subscription.unsubscribe();
  }, 5000);
};