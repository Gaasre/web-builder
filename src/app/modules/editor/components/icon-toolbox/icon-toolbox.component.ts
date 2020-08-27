import { Component, OnInit, Input } from '@angular/core';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { Block } from 'src/app/shared/models/block.model';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-icon-toolbox',
  templateUrl: './icon-toolbox.component.html',
  styleUrls: ['./icon-toolbox.component.scss']
})
export class IconToolboxComponent implements OnInit {

  icons;
  @Input() selectedBlock: Block;

  constructor(private storage: StorageService) { }

  ngOnInit(): void {
    const antDesignIcons = AllIcons;
    this.icons = Object.keys(antDesignIcons).map(key => antDesignIcons[key]).filter(x => x.theme === 'outline');
  }


  editContent(content: string) {
    this.selectedBlock.content = content;
    this.storage.updateBlock(this.selectedBlock);
  }

  getStyle(name: string) {
    const style = this.selectedBlock.style.find(x => x.name === name);
    return style ? style.value : null;
  }

  updateStyle(name: string, value: string): void {
    const found = this.selectedBlock.style.find(x => x.name === name);
    if (found) {
      found.value = value;
    }
    this.storage.updateBlock(this.selectedBlock);
  }

}
