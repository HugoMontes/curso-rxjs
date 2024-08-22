import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { subscriptionOperatorConcat } from './operators/combine-observable/concat'
import { subscriptionOperatorMap } from './operators/transform-operators/map'
import { subscriptionOperatorConcatMap } from './operators/transform-operators/concat-map'
import { subscriptionOperatorSwitchMap } from './operators/transform-operators/switch-map'
import { subscriptionOperatorFilter } from './operators/filters/filter'

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
// coldSubscriptions();
// hotdSubscriptions();
// subscriptionCreateObservable();
// subscriptionOperatorConcat();
// subscriptionOperatorMap();
// subscriptionOperatorConcatMap();
// subscriptionOperatorSwitchMap();
subscriptionOperatorFilter();
