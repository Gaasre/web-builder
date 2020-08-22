import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Block } from 'src/app/shared/models/block.model';

@Component({
  selector: 'app-layers',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.scss']
})
export class LayersComponent implements OnInit {

  @Output() selectionChanged = new EventEmitter<Block>();

  constructor(private data: StorageService) { }

  get Blocks() {
    return this.data.Blocks;
  }

  ngOnInit(): void {
    console.log(this.data.findBlock(4));
  }

  onSelect(block: Block) {
    this.selectionChanged.emit(block);
  }

}
