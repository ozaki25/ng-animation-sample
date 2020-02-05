import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  template: `
    <style>
      main {
        height: 100vh;
        width: 100vw;
        background-color: lightblue;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    </style>
    <main>
      <p>page1 works!</p>
      <p>
        <span>Prev</span>
        |
        <a routerLink="/page2">Next</a>
      </p>
    </main>
  `,
})
export class Page1Component {}
