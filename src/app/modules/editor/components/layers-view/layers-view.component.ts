import { Component, OnInit, Input } from '@angular/core';
import { Block } from 'src/app/shared/models/block.model';
import { isBoolean } from 'util';

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

  toCssStyle() {
    if (this.block) {
      const css = {};
      const shadow = {};
      this.block.style.forEach(b => {
        if (b.name === 'shadow-x' || b.name === 'shadow-y' || b.name === 'shadow-blur'
          || b.name === 'shadow-size' || b.name === 'shadow-color' || b.name === 'shadow-inset') {
          shadow[b.name] = isNaN(b.value) || typeof b.value === 'boolean' ? b.value : b.value + 'px';
        } else {
          css[b.name] = isNaN(b.value) ? b.value : b.value + 'px';
        }
      });
      // tslint:disable-next-line:max-line-length
      css['box-shadow'] = `${shadow['shadow-inset'] ? 'inset' : ''} ${shadow['shadow-x']} ${shadow['shadow-y']} ${shadow['shadow-x']} ${shadow['shadow-blur']} ${shadow['shadow-color']}`;
      return css;
    }
    return {};
  }

}
