import { Component } from '@angular/core';

@Component({
  selector: 'app-page2',
  template: `
    <style>
      main {
        height: 100vh;
        width: 100vw;
        background-color: lightgreen;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    </style>
    <main>
      <p>page2 works!</p>
      <p>
        <a routerLink="/page1">Prev</a>
        |
        <a routerLink="/page3">Next</a>
      </p>
    </main>
  `,
})
export class Page2Component {}
