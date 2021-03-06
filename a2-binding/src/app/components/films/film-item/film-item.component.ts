import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Film} from '../../../shared/models/film.model'

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html'
})
export class FilmItemComponent {
  @Input() private film: Film;
  @Output() private deleteFilm: EventEmitter<Film> = new EventEmitter<Film>();

  onClickDeleteFilm(): void {
    this.deleteFilm.emit(this.film);
  }
}
