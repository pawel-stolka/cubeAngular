import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'playlists-list',
  template: `
    <p>
      playlists-list works!
    </p>
    <playlist-item></playlist-item>
  `,
  styles: []
})
export class PlaylistsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
