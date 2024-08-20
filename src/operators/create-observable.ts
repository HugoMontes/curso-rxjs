import { from, of } from "rxjs";

// const number = new Observable((observer) => {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
// });

const number = of(1, 2, 3);
const number2 = from([1, 2, 3]);

interface IPerson {
  id: number;
  name: string;
}

const juan: IPerson = { id: 1, name: "Juan" };
const maria: IPerson = { id: 1, name: "Maria" };
const pedro: IPerson = { id: 1, name: "Pedro" };

const personsOf = of(juan, maria, [pedro]);
const personsFrom = from([juan, maria]);

export const subscriptionCreateObservable = () => {
  // number.subscribe({
  //   next: (value) => {
  //     console.log(value);
  //   },
  // });

  // number2.subscribe({
  //   next: (value) => {
  //     console.log("Operator FROM", value);
  //   },
  // });

  personsOf.subscribe({
    next: (person) => console.log("Person OF: ", person)
  });

  personsFrom.subscribe({
    next: (person) => console.log("Person From: ", person)
  });
};
