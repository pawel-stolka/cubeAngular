import { Component, EventEmitter, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import {Playlist } from './playlist';

@Component({
  selector: 'playlists-list',
  template: `
    <ul class="list-group">
      <li *ngFor="let playlist of playlists; let i=index" 
        (click)="select(playlist)"
        [class.active]=" selected == playlist"

        class="list-group-item">
        {{i+1 }}. {{playlist.name}}
      </li>
    </ul>

    <!--{{selected?.name}} -->
    {{selected?.name}}
  `,
  encapsulation: ViewEncapsulation.Emulated,
  styles: []
})

export class PlaylistsListComponent implements OnInit {

  @Input()
selected: Playlist;

select(playlist:Playlist){
  // this.selected = playlist;
  this.selectedChange.emit(playlist);
}

@Output('selectedChange')
selectedChange = new EventEmitter<Playlist>()

  @Input('playlists')
  playlists: Playlist[] = []

  constructor() { }

  ngOnInit() {
  }

}
