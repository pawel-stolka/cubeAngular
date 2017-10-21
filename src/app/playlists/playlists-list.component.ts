import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {Playlist } from './playlist';

@Component({
  selector: 'playlists-list',
  template: `
    <ul class="list-group">
      <li *ngFor="let playlist of playlists; let i=index" 
        (click)="selected = playlist"
        [class.active]=" selected == playlist"

        class="list-group-item">
        {{i+1 }}. {{playlist.name}}
      </li>
    </ul>

    {{selected?.name}}
    
  `,
  encapsulation: ViewEncapsulation.Emulated,
  styles: []
})

export class PlaylistsListComponent implements OnInit {

selected: Playlist;

  @Input('playlists')
  playlists: Playlist[] = []

  constructor() { }

  ngOnInit() {
  }

}
