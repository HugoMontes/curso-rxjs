import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { iShopSubscriptions } from './ishop'
import { coldSubscriptions } from './observables/cold-observable'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
// // CREACION DE UN OBSERVABLE "Fuente de Datos"
// const myObservable = new Observable((subscriber) => {
//   subscriber.next('Hola');
// });

// // SUSCRIPCION AL OBSERVABLE
// myObservable.subscribe({
//   next:(data)=>{
//     console.log(data);
//   }
// });

// iShopBoliviaLaPaz.subscribe({
//   next: (data) => { console.log(data); },
//   complete: () => { console.log('Se finalizo la transmision de datos.'); },
//   error: (error) => { console.log('ERROR: ', error); } 
// });

// iShopSubscriptions();
coldSubscriptions();