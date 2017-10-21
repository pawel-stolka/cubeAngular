import { Component, OnInit } from '@angular/core'; 
import { Playlist} from './playlist';

@Component({ selector: 'playlists', template: ` 
<div class="row">
<div class="col">
    <playlists-list [playlists]="playlists"></playlists-list>
</div>
<div class="col">
    <playlist-details [playlist]="selected"></playlist-details>
</div>
</div>
`, styles: [] }) 

export class PlaylistsComponent implements OnInit { 

  
  selected:Playlist;

  playlists:Playlist[] = [
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

  constructor() { 
    this.selected = this.playlists[0];
}

   ngOnInit() { } 
}