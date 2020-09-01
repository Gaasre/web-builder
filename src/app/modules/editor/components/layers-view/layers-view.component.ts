import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Block } from 'src/app/shared/models/block.model';
import { StorageService } from 'src/app/shared/services/storage.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Type } from 'src/app/shared/models/type.model';

@Component({
  selector: 'app-layers-view',
  templateUrl: './layers-view.component.html',
  styleUrls: ['./layers-view.component.scss']
})
export class LayersViewComponent implements OnInit {

  @Input() block: Block;
  @Output() selectionChanged = new EventEmitter<Block>();

  get hasChildren(): boolean {
    return this.block.children.length > 0;
  }

  constructor(private storage: StorageService) { }

  ngOnInit(): void {
  }

  selectBlock(block: Block) {
    this.storage.unselectBlocks();
    this.storage.selectBlock(block);
    this.selectionChanged.emit(block);
  }

  isInlineBlock(block: Block): boolean {
    return block.type.id !== 1 && block.type.id !== 2;
  }

  toCssStyle() {
    if (this.block) {
      return this.storage.toCssStyle(this.block);
    }
    return {};
  }

  onclicked(e) {
    e.stopPropagation();
  }

  deleteBlock(block: Block) {
    this.storage.deleteBlock(block);
  }

}
