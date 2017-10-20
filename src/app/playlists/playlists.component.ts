import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'playlists',
  template: `
    <p>
      playlists works!
    </p>
    <playlists-list>
    works!
    </playlists-list>
  `,
  styles: []
})
export class PlaylistsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
