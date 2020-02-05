import { Component } from '@angular/core';

@Component({
  selector: 'app-page3',
  template: `
    <style>
      main {
        height: 100vh;
        width: 100vw;
        background-color: lightyellow;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    </style>
    <main>
      <p>page3 works!</p>
      <p>
        <a routerLink="/page2">Prev</a>
        |
        <span>Next</span>
      </p>
    </main>
  `,
})
export class Page3Component {}
