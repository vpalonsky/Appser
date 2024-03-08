import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h2>Games</h2>
    <h3>Username: {{ username }}</h3>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">{{ game.name }} - {{ game.genre }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

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
