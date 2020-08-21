import { Component, OnInit, Input } from '@angular/core';
import { Block } from 'src/app/shared/models/block.model';

@Component({
  selector: 'app-layers-view',
  templateUrl: './layers-view.component.html',
  styleUrls: ['./layers-view.component.scss']
})
export class LayersViewComponent implements OnInit {

  @Input() block: Block;

  get hasChildren(): boolean {
    return this.block.children.length > 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleBlock(block: Block): void {
    block.open = !block.open;
  }

  isInlineBlock(block: Block): boolean {
    return block.type.id !== 1 && block.type.id !== 2;
  }

}
