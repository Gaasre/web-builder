import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Block } from 'src/app/shared/models/block.model';
import { isBoolean } from 'util';
import { StorageService } from 'src/app/shared/services/storage.service';

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
      const css = {};
      const shadow = {};
      this.block.style.forEach(b => {
        if (b.name === 'shadow-x' || b.name === 'shadow-y' || b.name === 'shadow-blur'
          || b.name === 'shadow-size' || b.name === 'shadow-color' || b.name === 'shadow-inset') {
          shadow[b.name] = isNaN(b.value) || typeof b.value === 'boolean' ? b.value : b.value + 'px';
        } else if (b.name === 'flexbox') {
          // tslint:disable-next-line:no-string-literal
          css['display'] = b.value ? 'flex' : 'block';
        } else {
          css[b.name] = isNaN(b.value) || b.name === 'font-weight' ? b.value : b.value + 'px';
        }
      });
      // tslint:disable-next-line:max-line-length
      css['box-shadow'] = `${shadow['shadow-inset'] ? 'inset' : ''} ${shadow['shadow-x']} ${shadow['shadow-y']} ${shadow['shadow-x']} ${shadow['shadow-blur']} ${shadow['shadow-color']}`;
      return css;
    }
    return {};
  }

}
