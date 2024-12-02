import {Component, output} from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {Game} from "../../models/game";

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [
    MatDialogContent,
    MatFormField,
    MatDialogActions,
    FormsModule,
    MatInput,
    MatDialogTitle,
    MatButton,
    MatLabel,
    MatDialogClose,
  ],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {
  name: string = '';
  game = Game;

  ngOnInit() {
    console.log('DialogAddPlayerComponent initialized');
  }

  addPlayer(name: string) {
    // If(name) {
    //   this.game.players.push(name);
    // }
  }

  onNoClick(){

  }
}
