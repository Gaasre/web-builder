import { Component, OnInit, Input } from '@angular/core';
import { Block } from 'src/app/shared/models/block.model';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-block-toolbox',
  templateUrl: './block-toolbox.component.html',
  styleUrls: ['./block-toolbox.component.scss']
})
export class BlockToolboxComponent implements OnInit {

  @Input() selectedBlock: Block;

  constructor(private storage: StorageService) { }

  ngOnInit(): void {
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
    console.log(this.selectedBlock);
    this.storage.updateBlock(this.selectedBlock);
  }

}
