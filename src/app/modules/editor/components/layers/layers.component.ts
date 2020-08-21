import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-layers',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.scss']
})
export class LayersComponent implements OnInit {

  constructor(private data: StorageService) { }

  get Blocks() {
    return this.data.Blocks;
  }

  ngOnInit(): void {
    console.log(this.data.findBlock(4));
  }

}
