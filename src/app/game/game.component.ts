import {Component} from '@angular/core';
import {NgStyle} from "@angular/common";
import {Game} from "../../models/game";
import {PlayerComponent} from "../player/player.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {DialogAddPlayerComponent} from "../dialog-add-player/dialog-add-player.component";
import {GameInfoComponent} from "../game-info/game-info.component";



@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    NgStyle,
    PlayerComponent,
    MatButtonModule,
    MatIconModule,
    GameInfoComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string | undefined;
  game: Game = new Game();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    if (!this.pickCardAnimation && this.game.stack.length > 0) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;
      setTimeout(() => {
        if (this.currentCard) {
          this.game.playedCards.push(this.currentCard);
        }
        this.pickCardAnimation = false;
        this.nextPlayer();
      }, 3500);
    }
  }

  nextPlayer() {
    if(this.game.currentPlayer + 1 === this.game.players.length) {
        this.game.currentPlayer = 0;
      }else {
        this.game.currentPlayer += 1;
      }
  }

  addPlayer(name:string) {
    this.game.players.push(name);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (!name || name === '') {
        return;
      } else {
        this.game.players.push(name);
      }
    });
  }
}
