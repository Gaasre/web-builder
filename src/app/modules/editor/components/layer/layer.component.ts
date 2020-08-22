import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Block } from 'src/app/shared/models/block.model';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.scss']
})
export class LayerComponent implements OnInit {

  @Input() block: Block;
  @Output() selectionChanged = new EventEmitter<Block>();

  get hasChildren(): boolean {
    return this.block.children.length > 0;
  }

  Toggle(): void {
    this.block.open = !this.block.open;
  }

  constructor(private data: StorageService) { }

  ngOnInit(): void {
  }

  selectBlock(block: Block): void {
    this.data.unselectBlocks();
    this.data.selectBlock(block);
    this.selectionChanged.emit(block);
  }

  onSelect(block: Block) {
    this.selectionChanged.emit(block);
  }
}
