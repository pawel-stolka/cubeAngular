import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Playlist } from './playlist';

@Component({
  selector: 'playlists-list',
  template: `
    <ul class="list-group">
      <li *ngFor="let playlist of playlists" class="list-group-item">
        {{playlist.name}}
      </li>
    </ul>
  <playlist-item ></playlist-item>
    
  `,
  encapsulation: ViewEncapsulation.Emulated,
  styles: []
})

export class PlaylistsListComponent implements OnInit {

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
