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

<div *ngIf="mode == 'show' ">
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

  <button class="btn btn-success" (click)="edit($event)" >Edit</button>
  </div>

<div *ngIf="mode == 'edit' ">
  <div  class="form-group">
    <label>Name</label>
    <input class="form-control"
        [(ngModel)]="playlist.name">
  </div>
  <div class="form-group">
    <label>Favourite</label>
    <input type="checkbox" class="form-control"
      [(ngModel)]="playlist.favourite">
  </div>
  <div class="form-group">
    <label>Color</label>
    <input type="color" [value]="playlist.color"
      [(ngModel)]="playlist.color">
</div>
<button class="btn btn-success" (click)="save($event)" >Save</button>
<button class="btn btn-danger" (click)="cancel($event)" >Cancel</button>
`, styles: []
})
export class PlaylistDetailsComponent implements OnInit {

mode = 'show'

edit(event) {
  this.mode = 'edit';
  console.log("editted!", event);
}

cancel(event) {
  this.mode = 'show';
  console.log("cancelled!", event);
}

save(event) {
  this.mode = 'edit';
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