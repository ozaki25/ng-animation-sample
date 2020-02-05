import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  template: `
    <style>
      main {
        height: 100%;
        width: 100%;
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
  styles: [],
})
export class Page2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
