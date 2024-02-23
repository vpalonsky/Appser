import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <ul>
      @for (game of games; track game.id) {
        <li>{{ game.name }} - {{ game.genre }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  games = [
    {
      id: 1,
      name: 'Counter Strike: Global Offensive',
      genre: 'First Person Shooter'
    },
    {
      id: 2,
      name: 'Dota 2',
      genre: 'MOBA'
    },
    {
      id: 3,
      name: 'FIFA 20',
      genre: 'Sports'
    }
  ]
}
