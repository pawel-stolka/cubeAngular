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
        (ngModelChange)=" playlist.name = $event "
        [ngModel]="playlist.name">
  </div>
  <div class="form-group">
    <label>Favourite</label>
    <input type="checkbox" class="form-control"
      (ngModelChange)=" playlist.favourite = $event "
      [ngModel]="playlist.favourite">
  </div>
  <div class="form-group">
    <label>Color</label>
    <input type="color" [value]="playlist.color"
      (ngModelChange)=" playlist.color = $event"
      [ngModel]="playlist.color">
</div>
<button (click)="save($event)" >Save</button>
`, styles: []
})
export class PlaylistDetailsComponent implements OnInit {

save(event) {
  console.log("saved!", event);
}

  playlist: Playlist = {
    id: 1,
    name: "Angular rules",
    color: '#2200ff',
    favourite: true
  }

  constructor() { }

  ngOnInit() { }
}