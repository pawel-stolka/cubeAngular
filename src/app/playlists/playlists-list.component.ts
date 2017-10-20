import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'playlists-list',
  template: `
    <p>
      playlists-list works!
    </p>
    <playlist-item ></playlist-item>
    <p>fru!</p>
  `,
  encapsulation: ViewEncapsulation.Emulated,
  styles: [`
  :host() {
    border: 1px solid red;
    display: block;
  }

  :host(.class-from-parent){
    background : blue;
  }

    :host() ::ng-deep p{
      color: hotpink;
    }
    `
  ]
})
export class PlaylistsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
