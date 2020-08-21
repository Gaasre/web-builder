import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-layers',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.scss']
})
export class LayersComponent implements OnInit {

  constructor(private data: StorageService) { }

  get Blocs() {
    return this.data.Blocs;
  }

  ngOnInit(): void {
    console.log(this.data.findBloc(4));
  }

}
