import { Component, OnInit } from '@angular/core';

interface Playlist {
  id: number;
  name: string;
  favourite: boolean;
  color: string;
  // tracks: []
}


@Component({
  selector: 'playlist-details',
  template: `
<div>
  <div class="form-group">
      <label>Name</label>
      <div class="form-control-static"> {{ playlist.name }} </div>
  </div>
  <div class="form-group">
      <label>Favourite</label>
      <div class="form-control-static">{{ playlist.favourite ? 'YES' : 'NO' }} </div>
  </div>
  <div class="form-group">
      <label>Color</label>
      <div class="form-control-static" [style.backgroundColor]=" playlist.color ">
          {{ playlist.color }}
      </div>
  </div>
</div>
<div>
  <div class="form-group">
    <label>Name</label>
    <input class="form-control"
        (keyup)=" playlist.name = $event.target.value "
        [value]="playlist.name">
  </div>
  <div class="form-group">
    <label>Favourite</label>
    <input type="checkbox" class="form-control"
      (change)=" playlist.favourite = $event.target.checked "
      [checked]="playlist.favourite">
  </div>
  <div class="form-group">
    <label>Color</label>
    <input type="color" [value]="playlist.color"
      (change)=" playlist.color = $event.target.value"
      [value]="playlist.color">
</div>
`, styles: []
})
export class PlaylistDetailsComponent implements OnInit {

  playlist: Playlist = {
    id: 1,
    name: "Angular rules",
    color: '#2200ff',
    favourite: true
  }

  constructor() { }

  ngOnInit() { }
}