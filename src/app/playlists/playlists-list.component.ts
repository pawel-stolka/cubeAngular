import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'playlists-list',
  template: `
    <p>
      playlists-list works!
    </p>
    <playlist-item ></playlist-item>
    
  `,
  encapsulation: ViewEncapsulation.Emulated,
  styles: []
})
export class PlaylistsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
