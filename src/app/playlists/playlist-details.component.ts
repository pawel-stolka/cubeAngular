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
        <div class="form-control-static" > {{ playlist.name }} </div>
    </div>
    <div class="form-group">
      <label>Favourite</label>
      <div class="form-control-static" >{{ playlist.favourite ? 'YES' : 'NO' }} </div>
    </div>
    <div class="form-group">
      <label>Color</label>
      <div class="form-control-static" > {{ playlist.color }} </div>
    </div>
</div>
`, styles: [] }) 
export class PlaylistDetailsComponent implements OnInit { 

  playlist: Playlist = {
    id: 1,
    name: "Angular rules",
    color: '#2200ff',
    favourite: false
  }

  constructor() { } 

  ngOnInit() { } 
}