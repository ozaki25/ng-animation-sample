import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  template: `
    <style>
      main {
        height: 100%;
        width: 100%;
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
  styles: [],
})
export class Page3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
