import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  playlists: Playlist[] = [
    {
      id: 1,
      name: 'Angular',
      color: '#FF0044',
      favourite: false
    },
    {
      id: 2,
      name: 'Angular infinite',
      color: '#00FF44',
      favourite: false
    },
    {
      id: 3,
      name: 'Angular kaput',
      color: '#110044',
      favourite: false
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
