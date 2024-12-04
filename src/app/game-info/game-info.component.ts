import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnInit, OnChanges {

  cardAction = [
    {
      title: 'Wasserfall',
      description: 'Alle müssen gleichzeitig anfangen zu trinken. Sobald Spieler 1 aufhört zu trinken, darf Spieler 2 aufhören. Spieler 3 darf aufhören, sobald Spieler 2 aufhört, und so weiter.'
    },
    {title: 'Du', description: 'Du entscheidest, wer trinkt.'},
    {title: 'Ich', description: 'Glückwunsch! Trink einen Shot!'},
    {
      title: 'Kategorie',
      description: 'Denke dir eine Kategorie aus (z. B. Farben). Jeder Spieler muss einen Begriff aus der Kategorie nennen.'
    },
    {
      title: 'Mach einen Move',
      description: 'Spieler 1 macht einen Tanzmove. Spieler 2 wiederholt den Tanzmove und fügt einen weiteren hinzu.'
    },
    {title: 'Mädels', description: 'Alle Mädchen trinken.'},
    {title: 'Himmel', description: 'Hände hoch! Der letzte Spieler muss trinken!'},
    {
      title: 'Partner',
      description: 'Wähle einen Partner. Dein Partner muss immer trinken, wenn du trinkst, und umgekehrt.'
    },
    {
      title: 'Daumenmeister',
      description: 'Der Spieler, der die Karte zieht, wird Daumenmeister. Er kann jederzeit seinen Daumen auf den Tisch legen. Die anderen Spieler müssen es ihm nachmachen. Der letzte Spieler, der es macht, muss trinken.'
    },
    {title: 'Männer', description: 'Alle Männer trinken.'},
    {title: 'Quizmeister', description: 'Der Spieler, der die Karte zieht, wird Quizmeister. Er kann den anderen Spielern jederzeit Fragen stellen. Wer die Frage beantwortet, muss trinken.'},
    {
      title: 'Ich hab noch nie...',
      description: 'Sage etwas, das du noch nie gemacht hast. Jeder, der es gemacht hat, muss trinken.'
    },
    {title: 'Regel', description: 'Erschaffe eine Regel. Jeder muss trinken, wenn er die Regel bricht.'},
  ];

  title = '';
  description = '';
  @Input() card: string | undefined = '';

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }

}
